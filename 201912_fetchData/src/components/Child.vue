<script>

export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
    },
  },
};
</script>

<template lang="pug">
section
  h1 Child.vue
  p isLoading:{{isLoading}}
  p userData:{{userData}}
</template>
