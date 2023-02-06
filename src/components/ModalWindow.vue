<template>
  <transition name="modal">
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
      <div class="modal">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <slot name="title">
          <h3 class="modal-title">Заголовок</h3>
        </slot>
        <slot name="body">
          <div class="modal-content">Дефолтный контент модального окна</div>
        </slot>
        <slot name="footer">
          <div class="modal-footer">
            <button class="modal-footer__button" @click="closeModal">Ок</button>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalWindow',
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    }
  }
}
</script>

<style scoped>
.modal-shadow {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ad626281;
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
  font-size: 17px;
  font-weight: 500;
  border-radius: 8px;
  min-width: 150px;
}
.modal-enter-active {
  transition: opacity 0.5s ease;
}
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
