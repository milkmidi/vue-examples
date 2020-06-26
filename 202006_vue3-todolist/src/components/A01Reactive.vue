
<script>
// https://composition-api.vuejs.org/#basic-example
import { reactive, computed } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count += 1;
    }

    return {
      state,
      increment,
    };
  },
};
</script>

<template>
  <section data-name="A01Reactive">
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </section>
</template>
