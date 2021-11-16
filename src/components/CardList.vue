<template>
  <div class="cards__list">
    <card v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: { Card },
  name: "CardList",

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";

.cards__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: map-get($breakpoints, md)) {
    & {
      justify-content: space-around;
    }
  }
}
</style>