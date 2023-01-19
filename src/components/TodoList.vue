<template>
  <div>
    <ul>
      <TodoItem v-for="elOfList of taskList" v-bind:elOfList="elOfList" v-on:removeItem="removeLi" />
      <!-- v-for позволяет  отрисовать массив + пробег по массиву (как цикл for). elOfList - ссылка на элемент массива, taskList1 - массив. -->
      <!-- v-on служит для обработки событий v-on:click, change и др, можно назначать свои, но тогда необходимо указать их в methods. -->
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  props: ['taskList1'], //здесь taskList1 свойство, которое передаем из главного файла App.vue в строке v-bind:taskList1 = "taskList2", где taskList1 принимает значения из массива taskList2
  components: {
    TodoItem
  },
  methods: {
    removeLi(id) {
      const deleteId = this.taskList.findIndex((item) => item.id === id)
      this.taskList.splice(deleteId, 1)
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
