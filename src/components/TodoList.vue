<template>
  <div>
    <AddTask @add1="addTask" />
    <ul>
      <TodoItem v-for="task of taskList" v-bind:task="task" v-on:removeItem="removeTask" v-on:completeTask="completed" />
      <!-- v-for позволяет  отрисовать массив + пробег по массиву (как цикл for). task - ссылка на элемент массива, taskList - массив. -->
      <!-- v-on служит для обработки событий v-on:click, change и др, можно назначать свои, но тогда необходимо указать их в methods. -->
      <!-- с помощью v-bind я передаю в файл TodoItem массив в переменной task, для получения массива в TodoItem нужно прописать props: task: {type: Object, required: true} -->
      <!--  -->
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import AddTask from '@/components/AddTask.vue'
export default {
  props: ['taskList1'], //здесь taskList1 свойство, которое передаем из главного файла App.vue в строке v-bind:taskList1 = "taskList2", где taskList1 принимает значения из массива taskList2
  components: {
    TodoItem,
    AddTask
  },
  methods: {
    removeTask(index) {
      const deleteTask = this.taskList.findIndex((item) => item.id === index)
      this.taskList.splice(deleteTask, 1)
    },
    addTask(add) {
      this.taskList.push(add)
    },
    completed(index) {
      const complete = this.taskList.findIndex((item) => item.id === index)
      this.taskList[complete].completed = !this.taskList[complete].completed
    }
  },
  data() {
    return {
      taskList: [
        { id: 1, title: 'byu 1', completed: false },
        { id: 2, title: 'byu 2', completed: false },
        { id: 3, title: 'byu 3', completed: false },
        { id: 4, title: 'byu 4', completed: false },
        { id: 5, title: 'byu 5', completed: false }
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
