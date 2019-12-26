<script>
export default {
  name: 'ChildVue',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<template lang="pug">
section(data-name="Child.vue")
  p {{name}}
  button(@click="$emit('update:name', Math.random().toString())") button
</template>

<style lang="stylus">
</style>
