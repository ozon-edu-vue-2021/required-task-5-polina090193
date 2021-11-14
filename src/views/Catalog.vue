<template>
  <div class="cards">
    <Card
      v-for="product of products"
      :key="product.id"
      :image="
        require('@/assets/images/' +
          imagesNames[Math.floor(Math.random() * imagesNames.length)])
      "
      :title="product.dish"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Catalog",
  components: {
    Card,
  },
  data() {
    return {
      products: [],
    };
  },

  computed: {
    imagesNames() {
      const data = require.context("@/assets/images", false, /^.*\.webp$/);
      const images = data.keys().map((string) => string.slice(2));
      return images;
    },
  },

  created() {
    this.$store.dispatch("getProducts").then((res) => (this.products = res));
  },

  methods: {
    getProducts() {
      // console.log();
      // const products = Promise.resolve(this.$store.dispatch("getProducts").then((res) => res))
      // return products;
    },
  },
};
</script>

<style>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
