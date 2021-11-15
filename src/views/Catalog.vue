<template>
  <div class="catalog">
    <h1 class="page-title">Каталог</h1>

    <div class="cards">
      <Card
        v-for="product of products"
        :key="product.id"
        :image="
          require('@/assets/images/' +
            imagesNames[Math.floor(Math.random() * imagesNames.length)])
        "
        :title="product.dish"
        :productID="product.id"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/CatalogCard.vue";

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
    this.$store.dispatch("getProducts").then((res) => {
      this.$store.commit("setProducts", res);
      this.products = res;
    });
  },

  methods: {},
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
