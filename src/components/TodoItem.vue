<template>
  <li>
    <span v-bind:class="{ done: task.completed }" @click="$emit('completeTask', task.id)">
      <input type="checkbox" :checked="task.completed" />
      {{ indexTask + 1 }} {{ task.title }} {{ task.completed }}
    </span>
    <!-- к span привязали класс с параметром done:(придумали, он в <script>) и значением task.completed, которое равно false из массива taskList-->
    <!-- при клике на текст меняется значение на true в объекте taskList, c checkbox - у него есть состояние checked -->

    <button @click="$emit('removeItem', task.id)">УДАЛИ МЕНЯ))</button>
    <!-- emit позволяет работать с локальными переменными, которые были объявлены здесь, чтобы не влиять на основные данные, которые у нас в data в файле app.vue. его мы передаем в файл TodoList.vue -->
    <!-- чтобы передать этот emit на уровень выше -->
  </li>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    task: {
      type: Object,
      required: true /* обящательно наличие данного элемента */
    },
    indexTask: Number
  }
}
</script>

<style scoped>
li {
  border: 1px solid rgb(121, 55, 121);
  display: flex;
  justify-content: space-between;
  padding: 12px 43px;
  margin-bottom: 5px;
  width: auto;
}
.done {
  text-decoration: line-through;
}
.remove {
  background-color: brown;
}
</style>
