<template>
  <div>
    <div class="buttons-container-nav">
      <button class="buttons-container-nav__btn-home button">
        <div class="buttons-container-nav__btn-label">Go to main page</div>
      </button>

      <div class="favorite__button-container">
        <big-button title="CLEAR ALL FAVORITES" />
      </div>
    </div>
    <card-list />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import BigButton from "./BigButton.vue";
import CardList from "./CardList.vue";

export default defineComponent({
  components: { CardList, BigButton },
  name: "Favorite",
});
</script>

<style lang="scss">
@import "@/styles/breakpoints.scss";
@import "@/styles/colors.scss";

.favorite {
  &__button-container {
    width: 400px;
  }
  @media (max-width: map-get($breakpoints, md)) {
    &__button-container {
      width: 100%;
    }
  }
}
.buttons-container-nav {
  display: flex;
  flex-direction: column;
  &__btn-home {
    width: 400px;
    border-radius: 8px;
    margin-top: 22px;
    font-size: 18px;
  }
  &__btn-label {
    margin: 17px 0px;
  }
  @media (max-width: map-get($breakpoints, md)) {
    &__btn-home {
      width: 100%;
    }
  }
}
</style>