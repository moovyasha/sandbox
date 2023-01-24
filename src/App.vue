<template>
  <div id="app">
    <h1>Todo APP</h1>
    <p>
      <RouterLink to="/">HOME</RouterLink>
      <div v-if="this.$route.path === '/'">тута
      </div>
    </p>
    <p>
      <router-link to="/todos">Todos</router-link>
      <div v-if="this.$route.path === '/todos'">тута
      </div>
    </p>
    <hr>
    <router-view />
  </div>
  
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
