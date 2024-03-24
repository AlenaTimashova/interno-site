<template>
  <ul class="articles__item-box">
    <li class="articles__item" v-for="article in articles" :key="article.id">
      <router-link to="/blog-details">
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
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ArticlesListComponent",

  computed: {
    ...mapState(["articles"]),
  },
};
</script>

<style lang="sass" scoped></style>
