<script>
import {
  reactive, computed, watch, ref, watchEffect,
  Ref,
} from 'vue';


export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    const count2:Ref<number> = ref(2);

    // watch reactive
    watch(() => state.count, (curr:number, prev:number) => {
      console.log(`watch state.count curr:${curr}, prev${prev}`);
    });

    // watch ref
    watch(count2, (curr:number, prev:number) => {
      console.log(`watch count2 curr:${curr}, prev:${prev}`);
    });

    // 新的 api, 不需要像 react hooks 加 dependencies, vue 會自動判斷，讚
    // https://composition-api.vuejs.org/api.html#watcheffect
    watchEffect(() => {
      // 這裡只 watch state.count, 所以 count2 更新時並不會發生 watch
      console.log(`%cwatchEffect state.count:${state.count}`, 'background:#1abc9c');
      // console.log(`watchEffect count2:${count2.value}`);
    });

    // methods
    function increment() {
      state.count += 1;
    }
    function incrementCount2() {
      count2.value += 1;
    }

    return {
      state,
      count2,
      increment,
      incrementCount2,
    };
  },
};
</script>

<template>
  <section data-name="A03WatchWatchEffect">
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
    <div class="mt-2" />
    <button @click="incrementCount2">
      Count2 is: {{ count2 }}
    </button>
  </section>
</template>
