<template>
  <div class="cart-wrapper">
    <h1 class="page-title">Корзина</h1>
    <div class="cart">
      <div class="cart-items">
        <Card
          v-for="product of cartProducts"
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :productID="product.id"
          :price="product.price"
        />
      </div>
      <div class="cart-info">Итого: {{}}</div>
    </div>
  </div>
</template>

<script>
import Card from "../components/CartCard.vue";

export default {
  name: "Cart",
  components: {
    Card,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    cartProducts() {
      return this.products.filter((product) => !!product.inCart);
    },
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  justify-content: space-between;
}

.cart-items {
  width: 50%;
}

.cart-info {
  color: wheat;
  font-size: 24px;
}
</style>
