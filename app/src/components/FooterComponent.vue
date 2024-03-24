<template>
  <footer class="footer container">
    <div class="footer__logos">
      <router-link class="logo footer__logo" to="/">
        <img
          class="logo-img footer__logo-img"
          src="@/assets/img/logo.jpg"
          alt="logo"
        />
      </router-link>
      <p class="footer__logos-text">
        It is a long established fact that a reader will be distracted lookings.
      </p>
      <div class="footer__socials">
        <a href="https://twitter.com/" target="_blank">
          <img
            class="footer__icon"
            src="@/assets/img/twitter-icon.svg"
            alt="twitter"
          />
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <img
            class="footer__icon"
            src="@/assets/img/linkedin-icon.svg"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
    <div class="footer__nav">
      <h3 class="footer__title">Pages</h3>
      <nav class="footer__nav">
        <ul class="footer__nav-list nav-list">
          <li class="footer__nav-item">
            <router-link class="footer__nav-link nav-link" to="/"
              >Home</router-link
            >
          </li>
          <li class="footer__nav-item">
            <router-link class="footer__nav-link nav-link" to="/projects"
              >Project</router-link
            >
          </li>
          <li class="footer__nav-item">
            <router-link class="footer__nav-link nav-link" to="/blog"
              >Blog</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer__contacts">
      <h3 class="footer__title">Contact</h3>
      <div class="footer__contact-info">
        <p class="footer__contact-address">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="footer__contact-email">contact@interno.com</p>
        <p class="footer__contact-phone">(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
