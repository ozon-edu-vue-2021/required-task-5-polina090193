<template>
  <div class="favorite">
    <h1 class="page-title">Избранное</h1>
    <div class="favorite-items">
      <Card
        v-for="product of favoriteProducts"
        :key="product.id"
        :image="product.image"
        :price="product.price"
        :title="product.dish"
        :productID="product.id"
        :inCart="product.inCart"
        :isFavorite="product.isFavorite"
        :quantity="product.quantity"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/CatalogCard.vue";

export default {
  name: "Favorites",
  components: {
    Card,
  },

  computed: {
    favoriteProducts() {
      return this.$store.getters.getFavoriteProducts;
    },
  },
};
</script>

<style scoped>
.favorite-items {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
