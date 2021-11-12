<template>
  <button class="filter-container__btn-reset button">
    <div class="filter-container__btn-label">{{ title }}</div>
  </button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BigButton",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/buttons.scss";

.filter-container {
  &__btn-reset {
    @include box-shadow();
    background: map-get($colors, main-color);
    margin-top: 22px;
    width: 100%;
  }
  &__btn-label {
    margin: 17px 0px;
    font-size: 18px;
    color: map-get($colors, white);
  }
}
</style>
