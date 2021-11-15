import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const findProductIndexInArray = (id, arr) => {
  return arr.findIndex((item) => item.id === id);
};

export default new Vuex.Store({
  strict: true,
  state: () => ({
    products: [],
    cartProducts: [],
    favoriteProducts: [],
  }),

  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },

    addProductToCart: (state, product) => {
      const index = findProductIndexInArray(product.id, state.cartProducts);
      if (index === -1) {
        state.cartProducts.push(product);
      }
    },

    removeProductFromCart: (state, productID) => {
      const index = findProductIndexInArray(productID, state.cartProducts);
      if (index !== -1) state.cartProducts.splice(index, 1);
    },

    quantityPlus: (state, productID) => {
      const index = findProductIndexInArray(productID, state.cartProducts);
      if (index !== -1) state.cartProducts[index].quantity++;
    },

    quantityMinus: (state, productID) => {
      const index = findProductIndexInArray(productID, state.cartProducts);
      if (index !== -1) state.cartProducts[index].quantity--;
    },

    toggleFavoriteProduct: (state, product) => {
      const index = findProductIndexInArray(product.id, state.favoriteProducts);
      if (index === -1) {
        state.favoriteProducts.push(product);
      } else {
        state.favoriteProducts.splice(index, 1);
      }
    },
  },

  actions: {
    getProducts: () => {
      const response = fetch(
        "https://random-data-api.com/api/food/random_food?size=30"
      );
      const data = response.then((res) => res.json());
      return data;
    },
  },
});
