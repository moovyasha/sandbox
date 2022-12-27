<template>
  <div id = "app">
    <h1>Todo APP</h1>
    <AddTask
    @add="addTask"
    />
    <TodoList
      v-bind:taskList1 = "taskList2"
      @removeItem = "removeTask"/> <!-- v-bind:taskList1 используется для привязки 1 или более атрибутов или значений к элементу taskList1 равное значению из массива taskList2 + динамически можно смотреть эти изменения пример https://progler.ru/blog/direktiva-v-bind-v-vue-js -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTask from '@/components/AddTask.vue';
export default {
  name: 'App',
  data() {
    return {
      taskList2: [
        {id: 1, title: 'byu 1', completed: false},
        {id: 2, title: 'byu 2', completed: false},
        {id: 3, title: 'byu 3', completed: false},
        {id: 4, title: 'byu 4', completed: false},
        {id: 5, title: 'byu 5', completed: false}
      ]
    }
  },
  methods: {
    removeTask(id) {
      this.taskList2 = this.taskList2.filter(number => number.id !== id)
    },
    addTask(test) {
      this.taskList2.push(test)
    }
  },
  components: {
    TodoList, AddTask
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
