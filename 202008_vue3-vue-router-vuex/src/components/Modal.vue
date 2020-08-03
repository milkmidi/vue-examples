<script>
import { computed, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Modal',

  props: {
    show: Boolean,
  },

  setup(props, { emit }) {
    const innerShow = computed({
      get: () => props.show,
      set: (value:boolean) => emit('update:show', value),
    });

    const closeModal = () => {
      innerShow.value = false;
    };

    const keypressHandler = ({ keyCode }) => {
      if (keyCode === 27) {
        closeModal();
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', keypressHandler);
    });
    onUnmounted(() => {
      window.removeEventListener('keydown', keypressHandler);
    });

    return {
      innerShow,
      closeModal,
    };
  },
};
</script>

<template>
  <teleport to="#modal-wrapper">
    <transition name="fade">
      <div v-if="innerShow" class="modal-wrapper" @click.self="closeModal">
        <div class="modal-wrapper-panel">
          <button class="btn btn-danger modal-wrapper-close-btn" @click="innerShow=false">X</button>
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
.modal-wrapper{
  position: fixed;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  background-color:rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-wrapper-panel{
    background-color: white;
    padding: 40px 20px 20px;
    position: relative;
    .modal-wrapper-close-btn{
      position: absolute;
      top:0;
      right:0;
    }
  }
}
</style>
