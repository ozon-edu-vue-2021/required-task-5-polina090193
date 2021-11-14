<template>
  <div id="app">
    <header class="menu">
      <nav class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Каталог</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/favorites">Избранное</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">Корзина</router-link>
        </li>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  background-color: #330000;
}

* {
  box-sizing: border-box;
}

#app {
  max-width: 1000px;
  margin: auto;
}

.menu {
  margin-bottom: 40px;
}

.nav {
  display: flex;
  justify-content: flex-end;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  margin-left: 20px;
  height: 30px;
  list-style: none;
  background-color: wheat;
}

.nav-link {
  color: black;
  text-decoration: none;
}

.nav-link.router-link-exact-active {
  color: red;
}
</style>
