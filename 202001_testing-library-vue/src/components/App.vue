<script>
import Counter from './Counter/Counter.vue';
import FetchDatas from './FetchDatas/FetchDatas.vue';


export default {
  components: {
    Counter,
    FetchDatas,
  },
};
</script>

<template>
  <div id="app">
    <Counter />
    <FetchDatas />
  </div>
</template>
