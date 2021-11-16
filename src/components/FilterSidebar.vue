<template>
  <div class="filter-container">
    <filter-header />
    <filter-form
      :brands="brands"
      :categories="categories"
      :active-filters="activeFilters"
      @setChexbox="setChexbox"
    />
    <big-button
      title="RESET ALL FILTERS"
      @clear-filter="() => $emit('clear-filter')"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FilterForm from "./FilterForm.vue";
import FilterHeader from "./FilterHeader.vue";
import BigButton from "./BigButton.vue";

export default defineComponent({
  name: "FilterSidebar",

  components: {
    FilterHeader,
    FilterForm,
    BigButton,
  },

  props: {
    activeFilters: {
      type: Object,
      required: true,
    },

    categories: {
      type: Array,
      required: true,
    },

    brands: {
      type: Array,
      required: true,
    },
  },

  methods: {
    setChexbox(inputData) {
      this.$emit("setChexbox", inputData);
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";

.filter-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 560px;
  margin: 26px;

  @include font-sh(16px, 32px);
  font-weight: 300;
  margin: 30px;

  @media (max-width: map-get($breakpoints, lg)) {
    & {
      min-width: 350px;
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