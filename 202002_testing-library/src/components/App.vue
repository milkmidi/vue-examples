<script>
import Counter from '@/components/Counter/Counter.vue';
import FetchDatas from '@/components/FetchDatas/FetchDatas.vue';

export default {
  components: {
    Counter,
    FetchDatas,
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <Counter />
      <FetchDatas />
    </div>
  </div>
</template>
