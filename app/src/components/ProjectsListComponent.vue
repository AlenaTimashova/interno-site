<template>
  <section class="project container">
    <div class="project__buttons-box">
      <button class="project__button">Bathroom</button>
      <button class="project__button">Bed Room</button>
      <button class="project__button">Kitchan</button>
      <button class="project__button">Living Area</button>
    </div>
    <ul class="project__item-list">
      <ProjectCardComponent
        v-for="project in projects"
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
        },
        {
          id: 2,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project6.png"),
        },
        {
          id: 3,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project7.png"),
        },
        {
          id: 4,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project8.png"),
        },
        {
          id: 5,
          title: "Minimal Bedroom",
          subtitle: "Decor / Artchitecture",
          img: require("@/assets/img/project9.png"),
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
