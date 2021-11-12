<template lang="html">
  <div class="main">
    <filter-sidebar />
    <card-container />
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
});
</script>

<style lang="scss">
.main {
  display: flex;
}
</style>