<script>
import Basic from '@/components/Basic/index.vue';

export default {
  components: {
  },
  mixins: [Basic],
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  },
};
</script>

<template lang="pug">
section
  h1 MixinFetch.vue
  p isLoading:{{isLoading}}
  p {{userData}}
</template>

<style lang="stylus">
</style>
