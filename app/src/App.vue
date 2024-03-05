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
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import IndexPageComponent from "./components/pages/IndexPageComponent.vue";
import BlogPageComponent from "./components/pages/BlogPageComponent.vue";
import BlogDetailsPageComponent from "./components/pages/BlogDetailsPageComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    IndexPageComponent,
    BlogPageComponent,
    BlogDetailsPageComponent,
  },
};
</script>

<style lang="sass"></style>
./components/pages/IndexPageComponent.vue
