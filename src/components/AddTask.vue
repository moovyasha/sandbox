<template>
  <form @submit.prevent="onSubmit">
    <!-- повесили событие отпраки формы и добавили модификатор не перещагрудать страницу -->
    <input type="Text" v-model="title" />
    <!-- v-model служит для связывания данных с формой -->
    <!-- <input v-model="message" placeholder="отредактируй меня" />
<p>Сообщение: {{ message }}</p>   https://ru.vuejs.org/v2/guide/forms.html -->
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.title)
      if (this.title.trim()) {
        const newTask = {
          id: Date.now(),
          title: this.title,
          completed: false
        } /* создали новый элемент */
        this.$emit('add', newTask) /* передали в emit newTask */
        this.title = '' /* обнуление значения поля после добавления задачи */
      }
    }
  }
}
</script>