<template lang="html">
  <div class="main">
    <filter-sidebar
      :categories="categories"
      :brands="brands"
      :active-filters="activeFilters"
      @clear-filter="() => $emit('clear-filter')"
      @setChexbox="setChexbox"
    />
    <card-container 
      :page="page"
      @inputValue="setInputValue"
    />
  </div>
</template>

<script>
import FilterSidebar from "./FilterSidebar.vue";
import CardContainer from "./CardContainer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Main",
  components: {
    FilterSidebar,
    CardContainer,
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

    page: {
      type: Array,
      required: true,
    },
  },

  methods: {
    setInputValue(inputValue) {
      this.$emit("inputValue", inputValue);
    },

    setChexbox(inputData) {
      this.$emit("setChexbox", inputData);
    },
  },
});
</script>

<style lang="scss">
.main {
  display: flex;
}
</style>