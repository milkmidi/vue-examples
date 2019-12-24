<script>
export default {
  name: 'InputExample',
  data: () => ({
    input: '',
  }),
};
</script>

<template>
  <section>
    <p>{{ input }}</p>
    <input
      v-model="input"
    >
    <input
      :value="input"
      @input="input = $event.target.value"
    >
  </section>
</template>
