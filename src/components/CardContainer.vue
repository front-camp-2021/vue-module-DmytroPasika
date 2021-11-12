<template>
  <div class="card-container">
    <search-bar />
    <card-list :items="items" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import CardList from "./CardList.vue";
import data from "@/store/data.js";

export default {
  components: {
    SearchBar,
    CardList,
  },
  name: "CardContainer",
  data() {
    return {
      items: data.products,
    };
  },
};
</script>

<style lang="scss">
.card-container {
  width: 100%;
}
</style>