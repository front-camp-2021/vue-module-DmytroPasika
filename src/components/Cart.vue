<template>
  <div>
    <div class="buttons-container-nav">
      <button class="buttons-container-nav__btn-home button">
        <div class="buttons-container-nav__btn-label">Go to main page</div>
      </button>
      <div class="favorite__button-container">
        <big-button title="REMOVE ALL FROM CART" />
      </div>
    </div>
    <card-list />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BigButton from "./BigButton.vue";
import CardList from "./CardList.vue";

export default defineComponent({
  name: "Cart",
  components: { CardList, BigButton },
});
</script>

<style lang="scss">
</style>