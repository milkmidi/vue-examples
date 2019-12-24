<script>

export default {
  name: 'MethodsExample',

  data: () => ({
    input: '',
  }),
  methods: {
    click(newValue, event) {
      this.input = newValue;
      console.log(event);
    },
  },
};
</script>

<template>
  <section>
    <p>{{ input }}</p>
    <button @click="click('12345', $event)">Button</button>
  </section>
</template>
