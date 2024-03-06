<template>
  <ul class="articles__item-box">
    <li class="articles__item" v-for="article in topArticles" :key="article.id">
      <a href="#">
        <figure class="card">
          <img :src="article.img" alt="card" class="articles__img" />
          <figcaption class="articles__desc-box">
            <span class="card__info articles__die">{{ article.die }}</span>
            <h3
              class="card__title articles__item-title"
              style="white-space: pre-line"
            >
              {{ article.title }}
            </h3>
            <div class="articles__desc">
              <p class="card__info">{{ article.date }}</p>
              <svg
                width="52"
                height="53"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </figcaption>
        </figure>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    article: Object,
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

  computed: {
    topArticles: function () {
      return this.articles.filter((article) => article.top);
    },
  },
};
</script>

<style lang="sass" scoped></style>
