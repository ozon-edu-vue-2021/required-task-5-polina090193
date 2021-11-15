<template>
  <div class="favorite">
    <h1 class="page-title">Избранное</h1>
    <div class="favorite-items">
      <Card
        v-for="product of favoriteProducts"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :productID="product.id"
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

  /* data() {
    return {
      favoriteProducts: [],
    };
  },

  created() {
    this.favoriteProducts = this.$store.state.favoriteProducts;
  }, */
};
</script>
