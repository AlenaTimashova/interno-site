<template>
  <li class="project__item">
    <router-link class="project__card" to="/project-details"
      ><figure class="card">
        <img :src="project.img" alt="card" class="card__img" />
        <figcaption class="card__desc-box">
          <div class="card__desc">
            <h3 class="card__title">{{ project.title }}</h3>
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
  </li>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style lang="sass" scoped></style>
