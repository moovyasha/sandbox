<template>
  <div id = "app">
    <h1>Todo APP</h1>
    <TodoList
      v-bind:test1 = "test2"/> <!-- здесь test1 это переменная, которой присваивается значение строки из массива test2 -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'App',
  data() {
    return {
      test2: [
        {id: 1, title: 'byu 1', completed: false},
        {id: 2, title: 'byu 12', completed: false},
        {id: 3, title: 'byu 123', completed: false}
      ]
    }
  },
  components: {
    TodoList
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
