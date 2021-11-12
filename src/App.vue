<template>
  <div>
    <shop-page />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ShopPage } from "./pages/index.js";

export default defineComponent({
  name: "App",
  components: {
    ShopPage,
  },
});
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

body {
  background-color: #f9f9f9;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Montserrat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
