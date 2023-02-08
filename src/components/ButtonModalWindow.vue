<template>
  <div class="page">
    <button class="show-modal-button" @click="showModal">Показать модальное окно</button>

    <ModalWindow ref="modal" />
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  
  components: {
    ModalWindow
  },
  methods: {
    showModal: function () {
      this.$refs.modal.show = true
    }
  }
}
</script>

<style>
/* body {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
} */

.page {
  position: relative;
  width: 100%;
  min-height: 100%;
}
</style>
