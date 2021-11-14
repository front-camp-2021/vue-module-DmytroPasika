<template lang="html">
  <div class="main">
    <filter-sidebar
      @set-filter="setFilter"
      :categories="categories"
      :brands="brands"
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
    setFilter(value) {
      this.$emit("set-filter", value);
    },

    setInputValue: function (inputValue) {
      this.$emit("inputValue", inputValue);
    },

    setChexbox: function (name, item, checked) {
      this.$emit("setChexbox", name, item, checked);
    },
  },
});
</script>

<style lang="scss">
.main {
  display: flex;
}
</style>