<template>
  <div>
    <header-app />
    <main-app
      :activeFilters="activeFilters"
      :page="page"
      :brands="brands"
      :categories="categories"
      @inputValue="setInputValue"
      @setChexbox="setCheckboxFilter"
      @clear-filter="clearFilter"
    />
    <pagination
      :countPages="totalPages"
      :currentPage="currentPage"
      @setCurrentPage="setCurrentPage"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { Header, Main, Pagination } from "@/components/index.js";
import FilterTypes from "@/helperFn/filter.js";
import axios from "axios";
import { defineComponent, provide } from "vue";

export default defineComponent({
  name: "ShopPage",

  data() {
    return {
      productsLink: "http://localhost:3001/products",
      brandsLink: "http://localhost:3001/brands",
      categoriesLink: " http://localhost:3001/categories",
      products: [],
      brands: [],
      categories: [],
      currentPage: 1,
      itemsPerPage: 9,
      activeFilters: {
        listFilters: {
          brand: [],
          category: [],
        },
        price: {
          min: 53,
          max: 85000,
        },
        search: "",
      },
    };
  },

  components: {
    "header-app": Header,
    "main-app": Main,
    Pagination,
  },

  methods: {
    clearFilter() {
      this.activeFilters = {
        listFilters: {
          brand: [],
          category: [],
        },
        price: {
          min: 53,
          max: 85000,
        },
        search: "",
      };
    },

    async getProducts() {
      const promises = [
        axios.get(this.productsLink),
        axios.get(this.brandsLink),
        axios.get(this.categoriesLink),
      ];
      const [{ data: products }, { data: brands }, { data: categories }] =
        await Promise.all(promises);
      this.products = products;
      this.brands = brands;
      this.categories = categories;
    },

    filter() {
      this.currentPage = 1;
    },

    hasValue(key, value) {
      switch (key) {
        case FilterTypes.ListFilters:
          return (
            value[FilterTypes.Brand].length ||
            value[FilterTypes.Category].length
          );
        case FilterTypes.Price:
          return true;
        default:
          return value.length;
      }
    },

    filterFn(item, filterType, filterValues) {
      switch (filterType) {
        case FilterTypes.ListFilters:
          if (
            filterValues[FilterTypes.Brand].length === 0 &&
            filterValues[FilterTypes.Category] === 0
          ) {
            return true;
          }
          let brand = filterValues[FilterTypes.Brand].includes(
            item[FilterTypes.Brand]
              ? item[FilterTypes.Brand].replace("-", "")
              : false
          );
          let category = filterValues[FilterTypes.Category].includes(
            item[FilterTypes.Category]
              ? item[FilterTypes.Category].replace("_", " ")
              : false
          );

          if (filterValues[FilterTypes.Brand].length === 0) {
            brand = true;
          }
          if (filterValues[FilterTypes.Category].length === 0) {
            category = true;
          }
          return category && brand;
        case FilterTypes.Price:
          return (
            item.price >= filterValues.min && item.price <= filterValues.max
          );

        case FilterTypes.Search:
          if (filterValues.length === 0 || item.title === undefined) {
            return true;
          } else {
            return item.title
              .toLowerCase()
              .includes(filterValues.toLowerCase());
          }

        default:
          return false;
      }
    },

    setCurrentPage(item) {
      this.currentPage = item;
    },

    setInputValue(inputValue) {
      this.activeFilters.search = inputValue;
      this.filter();
    },

    setCheckboxFilter(inputData) {
      let { type, value } = inputData;

      let filter = this.activeFilters.listFilters[type.toLowerCase()];
      const preparedValue = value.replace("-", " ").toLowerCase();
      if (Array.isArray(filter)) {
        if (
          !this.activeFilters.listFilters[type.toLowerCase()].includes(
            preparedValue
          )
        ) {
          filter.push(preparedValue);
        } else {
          filter = filter.filter((i) => i !== preparedValue);
        }
      }
      this.activeFilters.listFilters[type.toLowerCase()] = filter;
      this.filter();
    },
  },

  async created() {
    await this.getProducts();
  },

  computed: {
    filteredProducts() {
      return Object.entries(this.activeFilters).reduce(
        (filteredList, filter) => {
          const [key, value] = filter;
          return this.hasValue(key, value)
            ? filteredList.filter((item) => this.filterFn(item, key, value))
            : filteredList;
        },
        this.products
      );
    },

    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },

    page() {
      const last = this.currentPage * this.itemsPerPage;
      const first = last - this.itemsPerPage;
      return [...this.filteredProducts.slice(first, last)];
    },
  },
});
</script>

