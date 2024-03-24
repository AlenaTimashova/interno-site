<template>
  <section class="banner">
    <img src="@/assets/img/blog_banner.png" alt="banner" />
    <div class="banner__content">
      <h1 class="banner__heading">Articles &amp;&nbsp;News</h1>
      <div class="breadcrums">
        <router-link class="breadcrums__link" to="/">Home</router-link>
        <router-link class="breadcrums__link" to="/blog">Blog</router-link>
      </div>
    </div>
  </section>
  <section class="latest-post container">
    <h2 class="latest-post__heading">Latest Post</h2>
    <router-link to="/blog-details">
      <figure class="card latest-post__card">
        <img
          src="@/assets/img/latest_post_card.png"
          alt="card"
          class="latest-post__img"
        />
        <figcaption class="latest-post__desc-box">
          <h3 class="card__title latest-post__card-title">
            Low Cost Latest Invented Interior Designing Ideas
          </h3>
          <p class="latest-post__text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p class="latest-post__text">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div class="articles__desc">
            <p class="card__info">26 December,2022</p>
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
    </router-link>
  </section>
  <section class="articles_blog container">
    <h2 class="articles__title articles__title_blog">
      Articles &amp;&nbsp;News
    </h2>
    <ArticlesListComponent />
  </section>
  <PaginationComponent />
</template>

<script>
import ArticlesListComponent from "../ArticlesListComponent.vue";
import PaginationComponent from "../PaginationComponent.vue";

export default {
  name: "BlogPageComponent",
  components: {
    ArticlesListComponent,
    PaginationComponent,
  },
};
</script>

<style lang="sass" scoped></style>
