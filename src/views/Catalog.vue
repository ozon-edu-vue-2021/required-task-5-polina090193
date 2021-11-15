<template>
  <div class="catalog">
    <h1 class="page-title">Каталог</h1>
    <div class="cards">
      <Card
        v-for="product of products"
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
  name: "Catalog",
  components: {
    Card,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
