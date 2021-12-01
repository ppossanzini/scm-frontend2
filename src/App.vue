<template>
  <div id="app">
    <div id="nav">
      <a href="/">Home</a>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/raw">Raw</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/chart">Chart</router-link> |
    </div>

    <card>
      <input v-model.number="filter.minvalue" type="number" />
      <input v-model.number="filter.maxvalue" type="number" />
      <button slot="buttons">ok</button>
    </card>
    <router-view />
  </div>
</template>
<script lang="ts" src="./App.ts">
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
