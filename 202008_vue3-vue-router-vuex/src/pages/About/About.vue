<script>
import {
  ref,
  Ref,
} from 'vue';
import useMedia from '@/hooks/useMedia';

export default {
  name: 'About',
  setup() {
    const isMobileLayout:Ref<boolean> = useMedia('(max-width:768px)');
    const showPopup:Ref<boolean> = ref(false);
    return {
      isMobileLayout,
      showPopup,
    };
  },
};
</script>

<template>
  <h1 class="display-1">About</h1>
  <h4
    :class="{'is-active':isMobileLayout}"
  >
    About {{ isLess }}
  </h4>
  <button class="btn btn-info" @click="showPopup=true">show Popup {{ showPopup }}</button>

  <Modal v-model:show="showPopup">
    <div class="about-modal">
      <h1>hi ,I'm about</h1>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
h4 {
  &.is-active{
    background-color: black;
    color: white;
  }
}
</style>
