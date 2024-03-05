<template>
  <ArticleComponent />
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
export default {
  name: "ArticlesListComponent",
  comments: {
    ArticleComponent,
  },
};
</script>

<style lang="scss" scoped></style>
