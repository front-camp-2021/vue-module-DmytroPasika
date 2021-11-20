<template>
  <div class="card-container">
    <search-bar />
    <card-list :type="Types.Main" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import CardList from "./CardList.vue";
import { useMainComposable } from "@/composables/mainComposable";

export default {
  name: "CardContainer",

  components: {
    SearchBar,
    CardList,
  },

  setup() {
    const mainComposable = useMainComposable();
    const { Types } = mainComposable;
    return {
      Types,
    };
  },
};
</script>

<style lang="scss">
.card-container {
  width: 100%;
}
</style>