import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    // products:
  }),
  actions: {
    getProducts: () => {
      const response = fetch("https://random-data-api.com/api/food/random_food?size=30");
      const data = response.then(res => res.json());
      return data
    },
  },
});
