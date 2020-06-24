
<script>
import {
  computed, ref,
  Ref,
} from 'vue';

// https://composition-api.vuejs.org/#ref-vs-reactive
// https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/

export default {
  setup() {
    const count:Ref<number> = ref(0);
    const double = computed(() => count.value * 2);

    function increment() {
      count.value += 1;
    }

    return {
      count,
      double,
      increment,
    };
  },
};
</script>

<template>
  <section data-name="A02Ref">
    <button @click="increment">
      Count is: {{ count }}, double is: {{ double }}
    </button>
  </section>
</template>
