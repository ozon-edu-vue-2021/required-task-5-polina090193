<template>
  <div class="cart-item">
    <img :src="image" :alt="title" class="cart-item__img" />
    <div class="cart-item__info">
      <div class="cart-item__top">
        <span class="cart-item__title">{{ title }}</span>
        <Heart :isActive="isFavorite" @click.native="toggleFavorite" />
      </div>
      <span class="cart-item__price">{{ price }} ₽</span>
      <div class="card__counter">
        <button class="cart-item__btn cart-item__minus" @click="quantityMinus">
          -
        </button>
        <span class="cart-item__quant">{{ quantity }}</span>
        <button class="cart-item__btn cart-item__plus" @click="quantityPlus">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "./Heart.vue";

export default {
  name: "Card",

  components: {
    Heart,
  },

  props: {
    productID: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      default: "Продукт без названия",
    },

    image: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      default: 0,
    },

    quantity: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    isFavorite() {
      return !!this.$store.state.favoriteProducts.find((item) => {
        return item.id === this.productID;
      });
    },
  },

  methods: {
    quantityPlus() {
      this.$store.commit("quantityPlus", this.productID);
      this.quantity++;
    },

    quantityMinus() {
      this.quantity--;
      if (this.quantity < 1) {
        this.$store.commit("removeProductFromCart", this.productID);
      } else {
        this.$store.commit("quantityMinus", this.productID);
      }
    },

    toggleFavorite() {
      this.$store.commit("toggleFavoriteProduct", {
        id: this.productID,
        title: this.title,
        image: this.image,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: wheat;
  border-radius: 20px;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  overflow: hidden;
}

.cart-item__img {
  width: 30%;
  height: 100%;
  object-fit: cover;
}

.cart-item__top {
  display: flex;
  justify-content: space-between;
}

.cart-item__info {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
}

.cart-item__title {
  font-weight: 700;
}

.cart-item__price {
  margin-top: auto;
  margin-bottom: 20px;
}

.cart-item__btn {
  height: 30px;
  background-color: #330000;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
}

.cart-item__minus,
.cart-item__plus {
  width: 30px;
}

.cart-item__minus {
  margin-right: 10px;
}

.cart-item__plus {
  margin-left: 10px;
}
</style>
