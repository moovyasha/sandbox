<template>
  <div class="modal-shadow">
    <div class="modal">
      <div class="modal-close" @click="this.$emit('onCancel')">&#10006;</div>
      <!-- при клике на крестик значение show становится false и пропадает всплывающее окно. -->
      <form @submit.prevent="this.$emit('onSubmit')" id="saveTask" class="padding_form">
        <!-- повесили событие отпраки формы и добавили модификатор не перещагрудать страницу -->
        <input type="Text" v-model="title" />
        <!-- v-model служит для связывания данных с формой -->
        <!-- <input v-model="message" placeholder="отредактируй меня" />
<p>Сообщение: {{ message }}</p>   https://ru.vuejs.org/v2/guide/forms.html -->
        <!-- <button type="submit"><img src="@/assets/AddTask.png"></button> -->
      </form>
      <!-- @submit.prevent="onSubmit" -->
      <div class="modal-content">Current Task</div>

      <div class="modal-footer">
        <button type="submit" form="saveTask" class="modal-footer__button">Save</button>

        <button class="modal-footer__button" @click="this.$emit('onCancel')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import IconEdit from '@/components/Icons/IconEdit.vue'

export default {
  data() {
    return {}
  },
  mounted() {},
  props: {
    show: Boolean,
    editedItem: Object
  },
  components: {
    IconEdit
  },
  emits: ['onCancel', 'addTask', 'toggleVisibleForm', 'onSubmit'], //ее нужно прописать, чтобы определялась, во vue 2 не надо.
  methods: {
    
    
  },
  computed: {
    title: {
      get() {
        return this.editedItem.title
      },
      set(newValue) {
        this.editedItem.title = newValue
      }
    }
  }
}
</script>

<style>
.modal-shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000081;
  display: table;
}

.modal {
  background: #6db90a;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-close {
  border-radius: 50%;
  color: #4c15e2;
  background: #64c72a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 7px;
  right: 7px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.modal-title {
  color: #0971c7;
}

.modal-content {
  margin-bottom: 20px;
}

.modal-footer__button {
  background-color: #0971c7;
  color: #fff;
  border: none;
  text-align: center;
  padding: 8px;
  margin: 2px;
  font-size: 17px;
  font-weight: 500;
  border-radius: 8px;
  min-width: 150px;
}
</style>
