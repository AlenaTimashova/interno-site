<template>
  <header class="header container">
    <router-link class="logo header__logo" to="/">
      <img class="logo-img" src="@/assets/img/logo.jpg" alt="logo" />
    </router-link>
    <nav class="header__nav">
      <ul class="header__nav-list nav-list">
        <li class="header__nav-item" v-for="link in links" :key="link.id">
          <router-link class="header__nav-link nav-link" :to="link.url"
            >{{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          title: "Home",
          url: "/",
        },
        {
          id: 2,
          title: "Project",
          url: "/projects",
        },
        {
          id: 3,
          title: "Blog",
          url: "/blog",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
