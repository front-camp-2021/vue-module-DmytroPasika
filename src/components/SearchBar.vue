<template>
  <div class="search-bar" data-cy="test">
    <div class="search-bar__result">
      <span class="search-bar__text"> products found </span>
      <div class="search-bar__container-nav">
        <button class="search-bar__btn-cart button">
          <img
            src="@/assets/img/cart4.svg"
            alt="cart logo"
            class="search-bar__cart-image"
          />
        </button>
        <button class="search-bar__btn-favorite button">
          <img
            src="@/assets/img/heartWhite.svg"
            alt="heart logo"
            class="search-bar__favorite-image"
          />
        </button>
      </div>
    </div>
    <form class="search-bar__form">
      <div class="search-bar__container">
        <input class="search-bar__input" type="text" placeholder="Search" />
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";

.search-bar {
  margin-right: 28px;
  &__container-nav {
    display: flex;
    width: 100px;
    justify-content: space-around;
  }

  &__btn-cart {
    @include box-shadow();
    height: 40px;
    width: 46px;
  }

  &__btn-favorite {
    @include box-shadow();
    height: 40px;
    width: 46px;
    background: map-get($colors, main-color);
  }

  &__favorite-image {
    height: 13px;
    width: 15px;
  }

  &__search-bar-container {
    margin-right: 28px;
  }

  &__result {
    @include flex-btw();
    @include font-sh(18px, 21px);
    align-items: center;
    height: 68px;
    margin-top: 11px;
  }

  &__input {
    @include font-sh(22px, 26px);
    @include box-shadow();
    background-image: url(../assets/img/search.svg);
    background-position: 98%;
    background-repeat: no-repeat;
    height: 62px;
    width: 100%;

    font-weight: 300;

    border: none;

    padding-left: 32px;
    margin-top: 5px;
  }

  &__container {
    display: flex;
  }

  @media (max-width: map-get($breakpoints, md)) {
    margin-left: 28px;
  }

  @media (max-width: map-get($breakpoints, sm)) {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>