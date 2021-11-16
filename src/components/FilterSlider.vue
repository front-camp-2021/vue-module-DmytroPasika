<template>
  <div class="filter-container__title">{{ title }}</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterSlider",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
</style>