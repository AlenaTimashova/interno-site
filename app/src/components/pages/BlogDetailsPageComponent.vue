<template>
  <section class="banner banner_details">
    <img src="@/assets/img/blog_details_banner.png" alt="banner" />
  </section>
  <section class="blog-details container">
    <BlogDetailsArticles />
  </section>
</template>

<script>
import BlogDetailsArticles from "../BlogDetailsArticles.vue";

export default {
  name: "BlogDetailsPageComponent",
  components: {
    BlogDetailsArticles,
  },
};
</script>

<style lang="sass" scoped></style>
