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

export default {
  components: {
    ProjectCardComponent,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project5.png"),
          room: { title: "Bathroom", active: true },
        },
        {
          id: 2,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project6.png"),
          room: { title: "Bed Room", active: false },
        },
        {
          id: 3,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project7.png"),
          room: { title: "Living Area", active: false },
        },
        {
          id: 4,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project8.png"),
          room: { title: "Bed Room", active: false },
        },
        {
          id: 5,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project9.png"),
          room: { title: "Bed Room", active: false },
        },
        {
          id: 6,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project10.png"),
          room: { title: "Kitchan", active: false },
        },
        {
          id: 7,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project11.png"),
          room: { title: "Living Area", active: false },
        },
        {
          id: 8,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project12.png"),
          room: { title: "Kitchan", active: false },
        },
      ],
      buttons: [
        { room: "Bathroom", chosen: true },
        { room: "Bed Room", chosen: false },
        { room: "Kitchan", chosen: false },
        { room: "Living Area", chosen: false },
      ],
    };
  },
  methods: {
    showProjects(room, $event) {
      this.projects.forEach((project) => {
        console.log($event);
        project.room.active = false;
        if (project.room.title.toLowerCase() === room.toLowerCase()) {
          project.room.active = true;
        }
        this.makeActiveBtn($event);
      });
    },
    makeActiveBtn($event) {
      const btns = document.querySelectorAll(".project__button");
      btns.forEach((btn) => btn.classList.remove("project__chosen"));
      $event.target.classList.add("project__chosen");
    },
  },

  computed: {
    chosenProjects: function () {
      return this.projects.filter((project) => project.room.active);
    },
  },
};
</script>

<style lang="sass" scoped></style>
