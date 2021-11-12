<template>
  <div>
    <div class="filter-container__title">{{ title }}</div>
    <ul class="filter-container__list">
      <li v-for="item in items" :key="item">
        <div class="filter-container__container-checkbox">
          <label class="filter-container__label">
            <input
              :name="title.toLowerCase()"
              type="checkbox"
              :value="item"
              class="filter-container__checkbox"
            />
            <div class="filter-container__checkbox-custom"></div>
            <span class="filter-container__value">{{ item }}</span>
          </label>
          <div class="filter-container__item-counter">1920</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterChexbox",

  props: {
    items: {
      type: Array,
    },
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/mixin.scss";

.filter-container {
  &__title {
    display: flex;
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 10px;
  }

  &__list {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
  }

  &__checkbox-custom {
    width: 19px;
    height: 16px;
    border: 1px solid map-get($colors, ligth-gray);
  }

  &__list input:checked + &__checkbox-custom {
    background-color: map-get($colors, main-color);
    border: 1px solid map-get($colors, main-color);
  }

  &__container-checkbox {
    @include flex-btw();
  }

  &__label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  &__checkbox {
    display: none;
  }

  &__item-counter {
    padding-right: 15px;
  }

  &__value {
    margin-left: 12px;
  }
}
</style>