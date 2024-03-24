<template>
  <section class="hero container">
    <div class="hero__content">
      <h1 class="hero__heading">Let Your Home Be Unique</h1>
      <p class="hero__subtitle">
        There are many variations of the passages of lorem Ipsum fromavailable,
        majority.
      </p>
      <router-link to="/projects" class="hero__btn">
        Get Started
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </section>
  <section class="projects container">
    <header class="projects__heading">
      <h2 class="projects__title">Follow Our Projects</h2>
      <h3 class="projects__subtitle">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </h3>
    </header>
    <div class="projects__cards">
      <router-link class="projects__card" to="/project-details">
        <figure class="card">
          <img
            src="@/assets/img/project1.png"
            alt="card"
            class="card__img project__img-first"
          />
          <figcaption class="card__desc-box">
            <div class="card__desc">
              <h3 class="card__title">Modern Kitchan</h3>
              <h4 class="card__subtitle">Decor / Artchitecture</h4>
            </div>
            <svg
              width="70"
              height="70"
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
          </figcaption>
        </figure>
      </router-link>
      <router-link class="projects__card" to="/project-details"
        ><figure class="card">
          <img
            src="@/assets/img/project2.png"
            alt="card"
            class="card__img project__img-second"
          />
          <figcaption class="card__desc-box">
            <div class="card__desc">
              <h3 class="card__title">Modern Kitchan</h3>
              <h4 class="card__subtitle">Decor / Artchitecture</h4>
            </div>
            <svg
              width="70"
              height="70"
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
          </figcaption>
        </figure>
      </router-link>
      <router-link class="projects__card" to="/project-details">
        <figure class="card">
          <img
            src="@/assets/img/project3.png"
            alt="card"
            class="card__img project__img-third"
          />
          <figcaption class="card__desc-box">
            <div class="card__desc">
              <h3 class="card__title">Modern Kitchan</h3>
              <h4 class="card__subtitle">Decor / Artchitecture</h4>
            </div>
            <svg
              width="70"
              height="70"
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
          </figcaption>
        </figure>
      </router-link>
      <router-link class="projects__card" to="/project-details"
        ><figure class="card">
          <img
            src="@/assets/img/project4.png"
            alt="card"
            class="card__img project__img-fourth"
          />
          <figcaption class="card__desc-box">
            <div class="card__desc">
              <h3 class="card__title">Modern Kitchan</h3>
              <h4 class="card__subtitle">Decor / Artchitecture</h4>
            </div>
            <svg
              width="70"
              height="70"
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
          </figcaption>
        </figure>
      </router-link>
    </div>
  </section>
  <section class="counter">
    <ul class="counter__list container">
      <li class="counter__list-item">
        <h2 class="counter__item-count">12</h2>
        <p class="counter__item-desc">Years Of Experiance</p>
      </li>
      <li class="counter__list-item">
        <h2 class="counter__item-count">85</h2>
        <p class="counter__item-desc">Success Project</p>
      </li>
      <li class="counter__list-item">
        <h2 class="counter__item-count">15</h2>
        <p class="counter__item-desc">Active Project</p>
      </li>
      <li class="counter__list-item">
        <h2 class="counter__item-count">95</h2>
        <p class="counter__item-desc">Happy Customers</p>
      </li>
    </ul>
  </section>
  <section class="articles container">
    <header class="articles__heading">
      <h2 class="articles__title">Articles &amp;&nbsp;News</h2>
      <h3 class="articles__subtitle">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </h3>
    </header>
    <ul class="articles__item-box">
      <li
        class="articles__item"
        v-for="article in topArticles"
        :key="article.id"
      >
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexPageComponent",

  computed: {
    ...mapGetters(["topArticles"]),
  },
};
</script>

<style lang="sass" scoped></style>
