import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const findProductByID = function (id, arr) {
  return arr.find((item) => item.id === id);
};

export default new Vuex.Store({
  strict: true,
  state: () => ({
    products: [],
  }),

  mutations: {
    setProducts: (state, products) => {
      const imagesData = require.context(
        "@/assets/images",
        false,
        /^.*\.webp$/
      );
      const images = imagesData.keys().map((string) => string.slice(2));

      products.forEach((product) => {
        product.image = require("@/assets/images/" +
          images[Math.floor(Math.random() * images.length)]);
        product.price = Math.floor(Math.random() * 1000);
        product.inCart = false;
        product.quantity = 0;
        product.isFavorite = false;
      });

      state.products = products;
    },

    addProductToCart: (state, productID) => {
      const product = findProductByID(productID, state.products);
      if (product) {
        product.inCart = true;
        product.quantity = 1;
      }
    },

    removeProductFromCart: (state, productID) => {
      const product = findProductByID(productID, state.products);
      if (product && !!product.inCart) {
        product.inCart = false;
        product.quantity = 0;
      }
    },

    quantityPlus: (state, productID) => {
      const product = findProductByID(productID, state.products);
      if (product && !!product.inCart) {
        product.quantity++;
      }
    },

    quantityMinus: (state, productID) => {
      const product = findProductByID(productID, state.products);
      if (product && !!product.inCart) {
        product.quantity--;
        if (product.quantity < 1) {
          this.removeProductFromCart(productID);
        }
      }
    },

    toggleFavoriteProduct: (state, productID) => {
      const product = findProductByID(productID, state.products);
      if (product) {
        product.isFavorite = !product.isFavorite;
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
