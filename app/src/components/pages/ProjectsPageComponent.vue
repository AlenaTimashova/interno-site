<template>
  <BannerComponent />
  <ProjectsListComponent />
</template>

<script>
import BannerComponent from "../BannerComponent.vue";
import ProjectsListComponent from "../ProjectsListComponent.vue";
import FooterComponent from "../FooterComponent.vue";
import HeaderComponent from "../HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ProjectsListComponent,
  },
};
</script>

<style lang="sass" scoped></style>
