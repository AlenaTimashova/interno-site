<template>
  <section class="project container">
    <div class="project__buttons-box">
      <button
        class="project__button"
        :class="{ project__chosen: button.chosen }"
        v-for="(button, index) in buttons"
        :key="index"
        @click="showProjects(button.room, $event)"
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
  </section>
</template>

<script>
import ProjectCardComponent from "./ProjectCardComponent.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

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
    };
  },

  computed: {
    ...mapState(["projects"]),
    ...mapGetters(["chosenProjects"]),
  },

  methods: {
    ...mapActions(["showProjects"]),

    makeActiveBtn($event) {
      const btns = document.querySelectorAll(".project__button");
      btns.forEach((btn) => btn.classList.remove("project__chosen"));
      $event.target.classList.add("project__chosen");
    },
  },
};
</script>

<style lang="sass" scoped></style>
