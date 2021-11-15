<template>
  <div class="cart-wrapper">
    <h1 class="page-title">Корзина</h1>
    <div class="cart">
      <div class="cart-items">
        <Card
          v-for="product of cartProducts"
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
      <div class="cart-info">
        <div class="cart-info__sum">Итого: {{ sum }} ₽</div>
        <button class="cart__order" @click="makeOrder">Оформить заказ</button>
      </div>
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
    cartProducts() {
      return this.$store.getters.getCartProducts;
    },
    sum() {
      return this.$store.getters.getCartSum;
    },
  },

  methods: {
    makeOrder() {
      let text = "Ваш заказ:\n\n";
      for (let product of this.cartProducts) {
        text += `${product.dish}, ${product.price} ₽, ${product.quantity} шт.\n\n`;
      }
      text += `Итого: ${this.sum} ₽`;
      alert(text);
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
  width: 70%;
}

.cart-info {
  display: flex;
  flex-direction: column;
  color: wheat;
  font-size: 24px;
}
.cart__order {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  margin-top: 20px;
  height: 30px;
  list-style: none;
  background-color: wheat;
  color: black;
  text-decoration: none;
  border: 0;
  cursor: pointer;
}
</style>
