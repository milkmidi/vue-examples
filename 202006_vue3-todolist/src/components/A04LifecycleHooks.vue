
<script>
import {
  onMounted, onUpdated, onUnmounted,

} from 'vue';

export default {
  setup() {
    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
    };
  },
};
</script>

<template>
  <section data-name="A04LifecycleHooks" />
</template>
