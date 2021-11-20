<template>
  <div class="filter-container__header">
    <span class="filter-container__text"> Filters </span>
    <button class="filter-container__btn button">
      <img
        src="@/assets/img/pathReverse.svg"
        alt="button"
        class="filter-container__image-btn"
      />
      <img
        src="@/assets/img/pathReverse.svg"
        alt="button"
        class="filter-container__image-btn"
      />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterHeader",
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";

.filter-container {
  &__header {
    @include flex-btw();
    align-items: center;
    padding-bottom: 16px;
    background-color: map-get($colors, background-color);
  }
  &__text {
    font-size: 18px;
  }
  &__btn {
    @include box-shadow();
    width: 45px;
    height: 40px;
    background: map-get($colors, white);
  }
}
</style>
