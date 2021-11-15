<template>
  <div class="card">
    <img :src="image" :alt="title" class="card__img" />
    <div class="card__info">
      <div class="card__top">
        <span class="card__title">{{ title }}</span>
        <Heart :isActive="isFavorite" @click.native="toggleFavorite" />
      </div>
      <span class="card__price">{{ price }} ₽</span>
      <button v-if="!inCart" class="card__btn card__buy-btn" @click="addToCart">
        Купить
      </button>
      <div v-if="inCart" class="card__counter">
        <button class="card__btn card__minus" @click="quantityMinus">-</button>
        <span class="card__quant">{{ quantity }}</span>
        <button class="card__btn card__plus" @click="quantityPlus">+</button>
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
    inCart: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    addToCart() {
      this.$store.commit("addProductToCart", this.productID);
    },

    quantityPlus() {
      this.$store.commit("quantityPlus", this.productID);
    },

    quantityMinus() {
      this.$store.commit("quantityMinus", this.productID);
    },

    toggleFavorite() {
      this.$store.commit("toggleFavoriteProduct", this.productID);
    },
  },
};
</script>

<style scoped>
.card {
  background-color: wheat;
  border-radius: 20px;
  width: 200px;
  height: 340px;
  overflow: hidden;
}

.card__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  padding: 20px;
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__img {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.card__title {
  font-weight: 700;
}

.card__price {
  margin-top: auto;
  margin-bottom: 20px;
}

.card__btn {
  height: 30px;
  background-color: #330000;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
}

.card__buy-btn {
  width: 80%;
}

.card__minus,
.card__plus {
  width: 30px;
}

.card__minus {
  margin-right: 10px;
}

.card__plus {
  margin-left: 10px;
}
</style>
