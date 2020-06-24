<script>
import useFetchData, { UseFetchDataType } from '@/hooks/useFetchData';

export default {
  setup() {
    const state:UseFetchDataType = useFetchData();

    return {
      myVar: 'hi,9527',
      state,
      // ...state, 不能這樣寫 reactivity lost!
    };
  },
};
</script>

<template>
  <section data-name="CompositionApiUseFetchData">
    <p>{{ myVar }}</p>
    <p> isLoading:{{ state.isLoading }}</p>
    <p> userData:{{ state.userData }}</p>
  </section>
</template>
