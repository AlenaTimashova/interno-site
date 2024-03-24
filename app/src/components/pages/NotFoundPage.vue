<template>
  <section class="notFound">
    <div class="notFound__left">
      <h1 class="notFound__heading">404</h1>
      <h2 class="notFound__subheading">
        We are sorry, but the page you requested was not found
      </h2>
      <router-link class="hero__btn notFound__btn" to="/">
        Back To Home
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
    <div class="notFound__right">
      <img
        class="notFound__img"
        src="@/assets/img/notFound.png"
        alt="notFoundImage"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
