<template>
  <div class="filter-container__form-container">
    <form class="filter-container__form">
      <filter-slider title="Range" />
      <hr class="filter-container__horizontal-line" />
      <filter-checkbox :items="categories" title="Category" />
      <hr class="filter-container__horizontal-line" />
      <filter-checkbox :items="brands" title="Brand" />
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FilterSlider from "@/components/FilterSlider.vue";
import FilterCheckbox from "@/components/FilterCheckbox.vue";
import data from "../store/data.js";

export default defineComponent({
  name: "FilterForm",
  components: {
    FilterSlider,
    FilterCheckbox,
  },
  data() {
    return {
      brands: data.brands,
      categories: data.categories,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";

.filter-container {
  &__form-container {
    @include box-shadow();
    background-color: map-get($colors, white);
    min-height: 1200px;
  }

  &__form {
    max-width: 380px;
    padding-top: 20px;
    padding-left: 50px;
  }

  &__horizontal-line {
    margin-bottom: 33px;
    margin-top: 10px;
    width: 100%;
  }

  @media (max-width: map-get($breakpoints, lg)) {
    & {
      min-width: 350px;
    }

    &__form {
      padding-top: 10px;
      padding-left: 10px;
    }

    &__horizontal-line {
      margin-bottom: 15px;
      margin-top: 7px;
      width: 300px;
      margin-right: 15px;
    }
  }
}
</style>