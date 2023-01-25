<template>
  <div id="app">
    <h1>Todo APP</h1>
    <Menu />
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


.active-link .current_location{
  
  fill: rgb(16, 98, 250);
}
.active-link {
  color: rgb(16, 98, 250);
  font-weight: bold;
}
</style>
