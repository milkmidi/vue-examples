<script>
import MyScopedSlots from './MyScopedSlots';

export default {
  name: 'MyScopedSlotsExample',
  components: {
    MyScopedSlots,
  },
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
    inputHandler(event) {
      console.log(event);
      // event.name = '123';
      this.$refs.myRef.name = '123123';
    },
  },
};
</script>

<template>
  <section>
    <MyScopedSlots v-slot="{name}" ref="myRef">
      <h1>9527</h1>
      <h2>{{ name }}</h2>
      <!-- <input type="text" @input="ref.name = $event.target.value; console.log(ref)"> -->
      <input type="text" :value.sync="name">
    </MyScopedSlots>
  </section>
</template>
