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
    submitHandler() {

    },
  },
};
</script>

<template>
  <section data-name="MethodsExample.vue">
    <p>{{ input }}</p>
    <button @click.once="click('12345', $event)">Button</button>
    <form @submit.prevent="submitHandler" />
  </section>
</template>
