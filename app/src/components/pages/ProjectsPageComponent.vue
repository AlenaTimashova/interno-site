<template>
  <HeaderComponent />
  <BannerComponent />
  <FooterComponent />
</template>

<script>
import BannerComponent from "../BannerComponent.vue";
import FooterComponent from "../FooterComponent.vue";
import HeaderComponent from "../HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    BannerComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
