<template>
  <div class="card">
    <img :src="image" :alt="title" class="card__img" />
    <div class="card__info">
      <div class="card__top">
        <span class="card__title">{{ title }}</span>
        <Heart :isActive="isFavorite" @click.native="toggleFavorite" />
      </div>
      <span class="card__price">{{ price }} ₽</span>
      <button
        v-if="!inCart"
        class="card__btn card__buy-btn"
        @click="addToCart()"
      >
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
  },

  data() {
    return {
      inCart: false,
      quantity: 0,
    };
  },

  computed: {
    price: () => Math.floor(Math.random() * 1000),
    isFavorite() {
      return !!this.$store.state.favoriteProducts.find((item) => {
        return item.id === this.productID;
      });
    },
  },

  methods: {
    addToCart() {
      this.$store.commit("addProductToCart", {
        id: this.productID,
        quantity: 1,
        title: this.title,
        image: this.image,
        price: this.price,
      });

      this.inCart = true;
      this.quantity = 1;
    },

    quantityPlus() {
      this.$store.commit("quantityPlus", this.productID);
      this.quantity++;
    },

    quantityMinus() {
      this.quantity--;
      if (this.quantity < 1) {
        this.$store.commit("removeProductFromCart", this.productID);
        this.inCart = false;
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
.card {
  background-color: wheat;
  border-radius: 20px;
  width: 210px;
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
