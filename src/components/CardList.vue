<template>
  <div class="cards__list">
    <card
      v-for="item in type === Types.Main
        ? page
        : type === Types.Favorites
        ? favorites
        : type === Types.Cart
        ? cart
        : []"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { useMainComposable } from "../composables";
import Card from "./Card.vue";

export default defineComponent({
  name: "CardList",
  components: {
    Card,
  },

  props: {
    type: {
      type: String,
      required: true,
    },
  },

  setup() {
    const mainComposable = useMainComposable();
    const { page, Types } = mainComposable;
    const { favorites, cart } = toRefs(mainComposable.state);

    return {
      page,
      favorites,
      cart,
      Types,
    };
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