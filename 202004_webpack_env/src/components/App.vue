<script>

export default {
  name: 'App',
  data: () => ({
    name: process.env.CUSTOM_DATA,
  }),
};
</script>

<template lang="pug">
#app
  .container
    h1 {{name}}

</template>

<style lang="scss" scoped>
h1{
  border: 1px solid black;
  background: red;
  color: white;
  display: block;
  @include helloWorld('40px');
}
</style>
