<template>
  <div class="not-found__main-container">
    <h1>404 PAGE NOT FOUND</h1>
    <p>try one more time</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>

<style lang="scss">
.not-found {
  &__main-container {
    display: flex;
    justify-content: space-around;
    height: 200px;
    align-items: center;
    flex-direction: column;
  }
}
</style>