<template>
  <div id = "app">
    <h1>Todo APP</h1>
    <TodoList
      :taskList = "taskList"
      @removeItem = "removeTask"/> <!-- здесь test1 это переменная, которой присваивается значение строки из массива test2 -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'App',
  data() {
    return {
      taskList: [
        {id: 1, title: 'byu 122', completed: false},
        {id: 2, title: 'byu 1122', completed: false},
        {id: 3, title: 'byu 123', completed: false}
      ]
    }
  },
  methods: {
    removeTask(id) {
      this.taskList = this.taskList.filter(number => number.id !== id)
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
