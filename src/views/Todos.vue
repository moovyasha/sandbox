<template>
  <div>
    <h2>Todo</h2>
    <RouterLink to="/">HOME</RouterLink>
    <!-- <AddTask @add="addTask" /> -->
    <!-- <TodoList v-bind:taskList1="taskList2" @removeItem="removeTask" /> -->
    <TodoList />
    <!-- v-bind:taskList1 используется для привязки 1 или более атрибутов или значений к элементу taskList1 равное значению из массива taskList2, с помощью v-bind я передаю в файл Todolist массив в переменной taskList1, для получения массива в Todolist нужно прописать props: ['tasklist1'] + динамически можно смотреть эти изменения пример https://progler.ru/blog/direktiva-v-bind-v-vue-js -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  methods: {},
  components: {
    TodoList
  }
}
</script>
