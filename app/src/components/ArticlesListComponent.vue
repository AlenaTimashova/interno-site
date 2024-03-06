<template>
  <ArticleComponent
    v-for="article in articles"
    :key="article.id"
    :article="article"
  />
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
export default {
  name: "ArticlesListComponent",
  components: {
    ArticleComponent,
  },

  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          die: "Kitchan Design",
          img: require("@/assets/img/article_img1.png"),
          top: true,
        },
        {
          id: 2,
          title: "Low Cost Latest Invented Interior Designing \n Ideas.",
          date: "22 December,2022",
          die: "Living Design",
          img: require("@/assets/img/article_img2.png"),
          top: true,
        },
        {
          id: 3,
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          die: "Interior Design",
          img: require("@/assets/img/article_img3.png"),
          top: true,
        },
        {
          id: 4,
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          die: "Kitchan Design",
          img: require("@/assets/img/article_img4.png"),
          top: false,
        },
        {
          id: 5,
          title: "Low Cost Latest Invented Interior Designing \n Ideas.",
          date: "22 December,2022",
          die: "Living Design",
          img: require("@/assets/img/article_img5.png"),
          top: false,
        },
        {
          id: 6,
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          die: "Interior Design",
          img: require("@/assets/img/article_img6.png"),
          top: false,
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
