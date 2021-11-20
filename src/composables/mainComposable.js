import {
  computed,
  reactive,
  readonly,
  provide,
  inject
} from 'vue'
import FilterTypes from "@/helperFn/filter.js";
import axios from "axios";

export function buildMainComposable() {
  const state = reactive({
    productsLink: "http://localhost:3001/products",
    brandsLink: "http://localhost:3001/brands",
    categoriesLink: " http://localhost:3001/categories",
    loading: true,
    favorites: [],
    cart: [],
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
  })

  const Titles = {
    Favorites: 'REMOVE ALL FROM FAVORITES',
    Cart: 'REMOVE ALL FROM CART',
    Main: 'RESET ALL FILTERS',
  }

  const Types = {
    Favorites: 'Favorite',
    Cart: 'Cart',
    Main: 'Main',
  }

  const setInputValue = (inputValue) => {
    state.activeFilters.search = inputValue;
    setCurrentPageToFirst();
  }

  const getProducts = async () => {
    const promises = [
      axios.get(state.productsLink),
      axios.get(state.brandsLink),
      axios.get(state.categoriesLink),
    ];
    const [{ data: products }, { data: brands }, { data: categories }] =
      await Promise.all(promises);
    state.products = products;
    state.brands = brands;
    state.categories = categories;
    state.loading = false;
  }

  const filteredProducts = computed(() => {
    return Object.entries(state.activeFilters).reduce(
      (filteredList, filter) => {
        const [key, value] = filter;
        return hasValue(key, value)
          ? filteredList.filter((item) => filterFn(item, key, value))
          : filteredList;
      },
      state.products
    );
  })

  const totalPages = computed(() => Math.ceil(filteredProducts.value.length / state.itemsPerPage))

  const totalFilteredProducts = computed(() => filteredProducts.value.length ? filteredProducts.value.length : 0)

  const page = computed(() => {
    if (filteredProducts.value !== undefined) {
      const last = state.currentPage * state.itemsPerPage;
      const first = last - state.itemsPerPage;
      return [...filteredProducts.value.slice(first, last)];
    } else {
      return []
    }
  })

  const checked = (name, item) => {
    return state.activeFilters.listFilters[name.toLowerCase()].includes(
      item.replace("-", " ").toLowerCase())
  }

  const hasValue = (key, value) => {
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
  }

  const filterFn = (item, filterType, filterValues) => {
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
  }

  const setCurrentPageToFirst = () => {
    state.currentPage = 1
  }

  const setCurrentPage = (item = 0, type = "pageClick") => {
    if (type === "pageClick") {
      state.currentPage = item;
    } else if (type === "+" && state.currentPage < totalPages.value) {
      state.currentPage = state.currentPage + 1
    } else if (type === "-" && state.currentPage > 1) {
      state.currentPage = state.currentPage - 1
    }
  }

  const setCheckboxFilter = (inputData) => {
    let { type, value } = inputData;
    let filter = state.activeFilters.listFilters[type.toLowerCase()];
    const preparedValue = value.replace("-", " ").toLowerCase();
    if (Array.isArray(filter)) {
      if (
        !state.activeFilters.listFilters[type.toLowerCase()].includes(
          preparedValue
        )
      ) {
        filter.push(preparedValue);
      } else {
        filter = filter.filter((i) => i !== preparedValue);
      }
    }
    state.activeFilters.listFilters[type.toLowerCase()] = filter;
    setCurrentPageToFirst();
  }

  const clearFilter = () => {
    state.activeFilters = {
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
    setCurrentPageToFirst();
  }

  const addToFavorites = (id) => {
    const item = state.products.filter(i => i.id === id)
    state.favorites.push(item[0])
  }

  const removeFromFavorites = (id) => {
    state.favorites = state.favorites.filter(i => i.id !== id)
  }

  const addToCart = (id) => {
    const item = state.products.filter(i => i.id === id)
    state.cart.push(item[0])
  }

  const removeFromCart = (id) => {
    state.cart = state.cart.filter(i => i.id !== id)
  }

  const removeAllFromFavorites = () => {
    state.favorites = []
  }

  const removeAllFromCart = () => {
    state.cart = []
  }

  const inFavorites = (id) => state.favorites.map(i => i.id).includes(id)


  const inCart = (id) => state.cart.map(i => i.id).includes(id)

  return {
    state: readonly(state),
    page,
    totalPages,
    filteredProducts,
    getProducts,
    setCurrentPage,
    setInputValue,
    totalFilteredProducts,
    setCheckboxFilter,
    checked,
    clearFilter,
    Titles,
    Types,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
    removeAllFromFavorites,
    removeAllFromCart,
    inFavorites,
    inCart,
  }
}

const UseMainComposable = Symbol('UseMainComposable')

export function provideMainComposable(mainComposable) {
  const composable = mainComposable ?? buildMainComposable()
  provide(UseMainComposable, composable)
  return composable
}

export function useMainComposable() {
  return inject(UseMainComposable)
}
