<template>
  <div>
    <div class="buttons-container-nav">
      <router-link to="/">
        <button class="buttons-container-nav__btn-home button">
          <div class="buttons-container-nav__btn-label">Go to main page</div>
        </button>
      </router-link>
    </div>
    <big-button :title="Titles.Favorites" :type="Types.Favorites" />
    <card-list :type="Types.Favorites" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { BigButton, CardList } from "@/components";
import { useMainComposable } from "@/composables/mainComposable";

export default defineComponent({
  name: "Favorite",

  components: {
    BigButton,
    CardList,
  },

  setup() {
    const mainComposable = useMainComposable();
    const { Types, Titles } = mainComposable;
    return { Types, Titles };
  },
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