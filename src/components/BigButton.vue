<template>
  <button class="filter-container__btn-reset button" @click="reset(type)">
    <div class="filter-container__btn-label">{{ title }}</div>
  </button>
</template>

<script>
import { defineComponent } from "vue";
import { useMainComposable } from "../composables";

export default defineComponent({
  name: "BigButton",

  props: {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
  },

  setup() {
    const mainComposable = useMainComposable();
    const { clearFilter, removeAllFromFavorites, removeAllFromCart, Types } =
      mainComposable;

    const reset = (type) => {
      switch (type) {
        case Types.Main:
          clearFilter();
          break;
        case Types.Cart:
          removeAllFromCart();
          break;
        case Types.Favorites:
          removeAllFromFavorites();
          break;

        default:
          clearFilter();
          break;
      }
    };

    return {
      reset,
    };
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
