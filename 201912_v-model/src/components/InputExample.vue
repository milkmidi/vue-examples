<script>
import Child from './Child.vue';

export default {
  name: 'InputExample',
  components: {
    Child,
  },
  data: () => ({
    input: '',
    name: 'milkmidi',
  }),
};
</script>

<template>
  <section data-name="InputExample.vue">
    <p>{{ input }}</p>
    <input
      v-model="input"
    >
    <input
      :value="input"
      @input="input = $event.target.value"
    >
    <!-- sync 的原理，和 v-model 一樣 -->
    <Child :name.sync="name" />
    <Child :name="name" @update:name="name = $event" />
  </section>
</template>
