<script>
import { add, testFun } from '@/utils';

export default {
  data() {
    return {
      name: 'milkmidi',
    };
  },
  methods: {
    testBreakPoint() {
      const a = 1; // 在這行加個 breakpoint
      console.log('mounted', a);
      const sum = add(1, 2);
      const test = testFun(1, 2);
      console.log(sum);
      console.log(test);
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <button @click="testBreakPoint">
        Vue Test BreakPoint
      </button>
    </div>
  </div>
</template>

<style lang="scss">
</style>
