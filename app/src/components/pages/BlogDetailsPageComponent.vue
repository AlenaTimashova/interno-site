<template>
  <section class="banner banner_details">
    <img src="@/assets/img/blog_details_banner.png" alt="banner" />
  </section>
  <section class="blog-details container">
    <ArticlesComponent />
  </section>
</template>

<script>
import ArticlesComponent from "../ArticlesComponent.vue";

export default {
  name: "BlogDetailsPageComponent",
  components: {
    ArticlesComponent,
  },
};
</script>

<style lang="sass" scoped></style>
