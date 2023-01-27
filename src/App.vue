<template>
  <div id="app">
    <h1>Todo APP</h1>
    <Navig />
    <div style="border-top: 6px solid purple"></div>
    <router-view />
  </div>
</template>

<script>
import Navig from '@/views/Menu.vue'

export default {
  components: {
    Navig
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
</style>
