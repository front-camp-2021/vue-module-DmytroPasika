<template>
  <div class="card-container">
    <search-bar @inputValue="setInputValue" />
    <card-list :items="page" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import CardList from "./CardList.vue";

export default {
  components: {
    SearchBar,
    CardList,
  },

  name: "CardContainer",

  props: {
    page: {
      type: Array,
      required: true,
    },
  },

  methods: {
    setInputValue: function (inputValue) {
      this.$emit("inputValue", inputValue);
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.card-container {
  width: 100%;
}
</style>