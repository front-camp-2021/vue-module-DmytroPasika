<template>
  <div>
    <header-app />
    <main-app />
    <pagination />
  </div>
</template>

<script>
// @ is an alias to /src
import { Header, Main, Pagination } from "@/components/index.js";

export default {
  name: "ShopPage",
  components: {
    "header-app": Header,
    "main-app": Main,
    Pagination,
  },
};
</script>
