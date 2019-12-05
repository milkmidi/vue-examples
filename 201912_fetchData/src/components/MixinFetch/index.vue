<script>
import Basic from '@/components/Basic/index.vue';

export default {
  mixins: [Basic],
};
</script>

<template lang="pug">
section
  h1 MixinFetch.vue
  p isLoading:{{isLoading}}
  p {{userData}}
</template>
