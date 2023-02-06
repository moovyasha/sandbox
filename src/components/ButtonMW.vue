<template>
  <div class="page">
    <button class="show-modal-button" @click="showModal">Показать модальное окно</button>

    <modal-window ref="modal"></modal-window>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  name: 'App',
  components: {
    ModalWindow
  },
  methods: {
    showModal: function () {
      this.$refs.modal.show = true
    },
    showModalTwo: function () {
      this.$refs.modalTwo.show = true
    },
    sendDataFunction: function () {
      // обработчик отправки данных
    }
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
}

.page {
  position: relative;
  width: 100%;
  min-height: 100%;
}
</style>
