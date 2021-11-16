<template>
  <div>
    <div class="filter-container__title">{{ title }}</div>
    <ul class="filter-container__list">
      <Checkbox
        v-for="item in items"
        :key="item"
        :name="title"
        :item="item"
        :items="items"
        :active-filters="activeFilters"
        @setChexbox="setChexbox"
      />
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Checkbox from "./Checkbox.vue";

export default defineComponent({
  name: "FilterChexbox",

  props: {
    activeFilters: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },

  methods: {
    setChexbox(inputData) {
      this.$emit("setChexbox", inputData);
    },

    isChecked(item) {
      return this.filterChexbox[this.title.toLowerCase()].includes(item);
    },
  },

  components: {
    Checkbox,
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