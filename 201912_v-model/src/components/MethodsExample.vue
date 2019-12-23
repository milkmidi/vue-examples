<script>

export default {
  name: 'MethodsExample',

  data: () => ({
    input: '',
  }),
  methods: {
    click() {
      this.input = '95827';
    },
  },
};
</script>

<template>
  <section>
    <p>{{ input }}</p>
    <button @click="click('123', $event)">Button</button>
  </section>
</template>
