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
        v-for="project in chosenProjects"
        :key="project.id"
        :project="project"
      />
    </ul>
    <PaginationComponent />
  </section>
</template>

<script>
import ProjectCardComponent from "./ProjectCardComponent.vue";
import PaginationComponent from "./PaginationComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ProjectCardComponent,
    PaginationComponent,
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
    ...mapGetters(["chosenProjects", "total", "totalPages"]),
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

    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
  },
};
</script>

<style lang="sass" scoped></style>
