<template>
  <div id="app">
    <h1>Todo APP</h1>
    <Menu />
    <!-- <RouterLink to="/">HOME</RouterLink>
    <div v-if="this.$route.path === '/'">тута</div>
    <router-link to="/todos">Todos</router-link>
    <div v-if="this.$route.path === '/todos'">тута</div> -->

    <hr />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/views/Menu.vue'

export default {
  components: {
    Menu
  }
}
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

.exact-active-link {
  color: red;
}
.active-link {
  color: aqua;
}
</style>
