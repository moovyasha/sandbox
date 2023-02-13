<template>
  <form @submit.prevent="onSubmit" class = "padding_form">
    <!-- повесили событие отпраки формы и добавили модификатор не перещагрудать страницу -->
    <input type="Text" v-model="title" />
    <!-- v-model служит для связывания данных с формой -->
    <!-- <input v-model="message" placeholder="отредактируй меня" />
<p>Сообщение: {{ message }}</p>   https://ru.vuejs.org/v2/guide/forms.html -->
    <button type="submit"><img src="@/assets/AddTask.png"></button>
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
      // console.log(this.title)
      if (this.title.trim()) { //проверка на введенный текст в поле
        const newTask = {
          id: Date.now(),
          title: this.title,
          completed: false
        } /* создали новый элемент */
        this.$emit('add1', newTask) /* передали в emit newTask */
        this.title = '' /* обнуление значения поля после добавления задачи */
      }
    }
  }
}
</script>

<style>
.padding_form {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
