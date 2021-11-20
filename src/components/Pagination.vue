<template>
  <div class="pagination">
    <button
      class="pagination__reference-direction button"
      @click="setCurrentPage(0, '-')"
    >
      <img src="@/assets/img/PathNav2.svg" alt="navigation path" href="#123" />
    </button>

    <div class="pagination__pages reference">
      <div
        class="pagination__container"
        v-for="item in totalPages"
        :key="item"
        v-bind:class="{ pagination__active: item === currentPage }"
      >
        <button
          class="pagination__reference reference button"
          v-bind:class="{ pagination__active: item === currentPage }"
          @click="setCurrentPage(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <button
      class="pagination__reference-direction button"
      @click="setCurrentPage(0, '+')"
    >
      <img src="@/assets/img/PathNav1.svg" alt="navigation path" href="#321" />
    </button>
  </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { useMainComposable } from "../composables";

export default defineComponent({
  name: "Pagination",

  setup() {
    const mainComposable = useMainComposable();
    const { totalPages, setCurrentPage } = mainComposable;
    const { currentPage } = toRefs(mainComposable.state);

    return {
      totalPages,
      currentPage,
      setCurrentPage,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";
@import "@/styles/breakpoints.scss";
@import "@/styles/buttons.scss";
@import "@/styles/ref.scss";

.pagination {
  @include flex-center();
  @include font-sh(18px, 21px);
  flex-wrap: nowrap;
  margin-top: 38px;
  margin-bottom: 28px;

  & &__active {
    background: map-get($colors, main-color);
    color: map-get($colors, white);
  }

  &__reference-direction {
    @include flex-center;

    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: map-get($colors, gray);
  }

  &__pages {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0px 17px;
    height: 40px;
    background: map-get($colors, gray);
    border-radius: 20px;
    align-items: center;
  }

  &__container {
    @include flex-center();
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media (max-width: map-get($breakpoints, lg)) {
    &__pages {
      // width: 80%;
      margin: 0px;
    }
  }

  @media (max-width: map-get($breakpoints, md)) {
    &__pages {
      width: 80%;
      margin: 0px;
    }
  }

  @media (max-width: map-get($breakpoints, sm)) {
    & {
      font-size: 14px;
    }

    &__pages {
      width: 80%;
      margin: 0px;
    }
    &__ref-direction {
      height: 20px;
      width: 20px;
    }
  }
}
</style>