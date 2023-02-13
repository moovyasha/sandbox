<template>
  <button @click="$emit('toggleVisibleForm', true)"><IconEdit /></button>
  <div v-if="show" class="modal-shadow">
    <div class="modal">
      <div class="modal-close" @click="$emit('toggleVisibleForm', false)">&#10006;</div>
      <!-- при клике на крестик значение show становится false и пропадает всплывающее окно. -->
      <h3 class="modal-title">Текущая задача</h3>

      <div class="modal-content">Дефолтный контент модального окна</div>

      <div class="modal-footer">
        <button class="modal-footer__button" @click="$emit('toggleVisibleForm', false)">Save</button>
        <button class="modal-footer__button" @click="$emit('toggleVisibleForm', false)">Cancel</button>
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
  props: {
    show: Boolean
  },
  components: {
    IconEdit,
  },
  emits: ['toggleVisibleForm'], //ее нужно прописать, чтобы определялась, во vue 2 не надо.
}
</script>

<style>
.modal-shadow {
  position: fixed;
  /* z-index: 9998; */
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
