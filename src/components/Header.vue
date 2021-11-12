<template lang="html">
  <div class="header">
      <div class="header__logo">
        <img src="@/assets/img/logo.png" alt="logo" class="header__image" />
        <span class="header__text">
          Online Store
        </span>
      </div>
    <div class="header__nav header-nav">
        <img src="@/assets/img/home.svg" alt="home button" class="header-nav__home-image" />
      <span class="header-nav__span">
        <img src="@/assets/img/Pathnav.svg" alt="navigation element" class="header-nav__path-image" />
        <img src="@/assets/img/Pathnav.svg" alt="navigation element" class="header-nav__path-image" />
      </span>
      <span class="header-nav__text header-nav__text--checked">
        eCommerce
      </span>
      <span class="header-nav__span">
        <img src="@/assets/img/Pathnav.svg" alt="navigation element" class="header-nav__path-image" />
        <img src="@/assets/img/Pathnav.svg" alt="navigation element" class="header-nav__path-image" />
      </span>
      <span class="header-nav__text">
        Electronics
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";

.header {
  margin-left: 38px;
  margin-bottom: 13px;

  &__nav {
    display: flex;
  }
  &__logo {
    display: flex;
    align-items: center;
    padding-bottom: 36px;
  }

  &__text {
    font-weight: 600;
    font-size: 48px;
    line-height: 27px;
    color: map-get($colors, main-color);
    margin-left: 22px;
  }

  &__image {
    height: 72px;
    width: 91px;
  }

  &-nav__text--checked {
    @include font-sh();
    color: map-get($colors, main-color);
  }

  &-nav__text {
    @include font-sh();
  }

  &-nav__span {
    margin: 0px 12px;
  }

  @media (max-width: map-get($breakpoints, lg)) {
    &__logo {
      padding-bottom: 24px;
    }
  }

  @media (max-width: map-get($breakpoints, md)) {
    & {
      display: none;
    }
  }

  @media (max-width: map-get($breakpoints, sm)) {
    & {
      display: none;
    }
  }
}
</style>


