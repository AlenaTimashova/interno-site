<template>
  <HeaderComponent />
  <IndexPageComponent />
  <FooterComponent />

  <HeaderComponent />
  <BlogPageComponent />
  <FooterComponent />

  <HeaderComponent />
  <BlogDetailsPageComponent />
  <FooterComponent />

  <ProjectsPageComponent />

  <HeaderComponent />
  <ProjectDetailsPage />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import IndexPageComponent from "./components/pages/IndexPageComponent.vue";
import BlogPageComponent from "./components/pages/BlogPageComponent.vue";
import BlogDetailsPageComponent from "./components/pages/BlogDetailsPageComponent.vue";
import ProjectsPageComponent from "./components/pages/ProjectsPageComponent.vue";
import ProjectDetailsPage from "./components/pages/ProjectDetailsPage.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    IndexPageComponent,
    BlogPageComponent,
    BlogDetailsPageComponent,
    ProjectsPageComponent,
    ProjectDetailsPage,
  },
};
</script>

<style lang="sass"></style>
./components/pages/IndexPageComponent.vue
