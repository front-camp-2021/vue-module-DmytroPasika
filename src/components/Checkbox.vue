<template>
  <li>
    <div class="filter-container__container-checkbox">
      <label class="filter-container__label">
        <input
          :name="name"
          type="checkbox"
          :value="item"
          class="filter-container__checkbox"
          :checked="checked"
          @click="setChexbox(name, item, checked)"
        />
        <div class="filter-container__checkbox-custom"></div>
        <span class="filter-container__value">{{ item }}</span>
      </label>
      <div class="filter-container__item-counter">1920</div>
    </div>
  </li>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkbox",
  props: {
    name: {
      type: String,
      require: true,
    },
    item: {
      type: String,
      require: true,
    },
  },

  methods: {
    setChexbox: function (name, item, checked) {
      this.$emit("setChexbox", name, item, !checked);
      this.checked = !checked;
    },
  },

  data() {
    return {
      checked: false,
    };
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
