<template>
  <section class="project container">
    <div class="project__buttons-box">
      <button
        class="project__button"
        :class="{ project__chosen: button.chosen }"
        v-for="(button, index) in buttons"
        :key="index"
        @click="showProjects(button.room), makeActiveBtn($event)"
      >
        {{ button.room }}
      </button>
    </div>
    <ul class="project__item-list">
      <ProjectCardComponent
        v-for="project in paginatedProjects"
        :key="project.id"
        :project="project"
      />
    </ul>
    <div class="pagination" v-if="totalPages > 1">
      <router-link
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :to="getPageLink(pageNumber)"
      >
        {{ pageNumber }}
      </router-link>
    </div>
  </section>
</template>

<script>
import ProjectCardComponent from "./ProjectCardComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ProjectCardComponent,
  },
  data() {
    return {
      buttons: [
        { room: "Bathroom", chosen: true },
        { room: "Bed Room", chosen: false },
        { room: "Kitchan", chosen: false },
        { room: "Living Area", chosen: false },
      ],
      itemsPerPage: 2,
    };
  },

  computed: {
    ...mapGetters(["chosenProjects"]),

    totalPages() {
      return Math.ceil(this.chosenProjects.length / this.itemsPerPage);
    },
    paginatedProjects() {
      const pageNumber = this.getCurrentPageNumber();
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.chosenProjects.slice(startIndex, endIndex);
    },
  },

  methods: {
    ...mapActions(["showProjects"]),

    makeActiveBtn($event) {
      const btns = document.querySelectorAll(".project__button");
      btns.forEach((btn) => btn.classList.remove("project__chosen"));
      $event.target.classList.add("project__chosen");
    },

    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber); // обращение к глобальному объекту роутер, его параметрам
      return isNaN(pageNumberParam) || pageNumberParam < 1
        ? 1
        : pageNumberParam;
    },
    getPageLink(pageNumber) {
      return `/project/${pageNumber}`;
    },
  },
};
</script>

<style lang="sass" scoped></style>
