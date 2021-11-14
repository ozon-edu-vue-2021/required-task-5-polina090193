import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Catalog from "../views/Catalog.vue";
import Cart from "../views/Cart.vue";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { name } = to.meta;
  document.title = name ? name : "";
  next();
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
