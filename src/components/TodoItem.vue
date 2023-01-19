<template>
  <li>
    <span v-bind:class="{ done: elOfList.completed }">
      <input type="checkbox" v-model="elOfList.completed" />
      <strong></strong>
      {{ elOfList.title }}
    </span>
    <!-- к span привязали класс с параметром done:(придумали, он в <script>) и значением elOfList.completed -->

    <button @click="$emit('removeItem', elOfList.id)"></button>
    <!-- emit позволяет работать с локальными переменными, которые были объявлены здесь, чтобы не влиять на основные данные, которые у нас в data в файле app.vue. его мы передаем в файл TodoList.vue -->
  </li>
</template>

<script>
export default {
  props: {
    elOfList: {
      type: Object,
      required: true /* обящательно наличие данного элемента */
    },

    index: Number
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
