export const productModules = {
  namespaced: true,
  state: {
    search: '',
    shoppingProducts: [],
    selectedCategory: '',
    selectedProduct: null,
  },
  mutations: {
    SET_SEARCH(state, data) {
      state.search = data;
    },
    SET_SHOPPING_PRODUCTS(state, data) {
      state.shoppingProducts.push(data);
    },
    DELETE_SHOPPING_PRODUCTS(state) {
      state.shoppingProducts.pop();
    },
    SET_CATEGORY(state, data) {
      state.selectedCategory = data;
    },
    SET_SELECTED_PRODUCTS(state, data) {
      state.selectedProduct = data;
    },
  },
  actions: {
    setSearch(vuexContext, data) {
      vuexContext.commit('SET_SEARCH', data);
    },
    setShoppingProducts(vuexContext, data) {
      vuexContext.commit('SET_SHOPPING_PRODUCTS', data);
    },
    deleteShoppingProducts(vuexContext) {
      vuexContext.commit('DELETE_SHOPPING_PRODUCTS');
    },
    setSelectedCategory(vuexContext, data) {
      vuexContext.commit('SET_CATEGORY', data);
    },
    setSelectedProduct(vuexContext, data) {
      vuexContext.commit('SET_SELECTED_PRODUCTS', data);
    },
  },
  getters: {
    getSearch(state) {
      return state.search;
    },
    getShoppingProducts(state) {
      return state.shoppingProducts;
    },
    getSelectedCategory(state) {
      return state.selectedCategory;
    },
    getSelectedProduct(state) {
      return state.selectedProduct;
    },
  },
};
