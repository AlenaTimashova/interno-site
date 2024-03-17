<template>
  <section class="banner">
    <img src="@/assets/img/project-details_banner.jpg" alt="banner" />
  </section>
  <section class="project-details container">
    <h1 class="project-details__title">{{ project_details.title }}</h1>
    <p
      class="project-details__text"
      v-for="paragraph in project_details.text"
      :key="index"
    >
      {{ paragraph }}
    </p>
  </section>
  <section class="slider container">
    <SwiperComponent class="project-details__swiper" />
  </section>
</template>

<script>
import SwiperComponent from "../SwiperComponent.vue";
import { mapState } from "vuex";
export default {
  components: {
    SwiperComponent,
  },
  computed: {
    ...mapState(["project_details"]),
  },
};
</script>

<style lang="sass" scoped></style>
