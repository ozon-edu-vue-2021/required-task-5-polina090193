<template>
  <div class="card">
    <img :src="image" :alt="title" class="card__img" />
    <div class="card__info">
      <span class="card__title">{{ title }}</span>
      <span class="card__price">{{ price }} ₽</span>
      <button v-if="!inCart" class="card__buy-btn" @click="addToCart()">
        Купить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
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
    };
  },

  computed: {
    price: () => Math.floor(Math.random() * 1000),
  },

  methods: {
    addToCart() {
      this.inCart = true;
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
  object-fit: cover;
  padding: 20px;
}

.card__img {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.card__title {
  margin-bottom: 20px;
  font-weight: 700;
}

.card__buy-btn {
  width: 80%;
  height: 30px;
  font-weight: 700;
  background-color: #330000;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}
</style>
