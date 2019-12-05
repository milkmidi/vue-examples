<script>


interface Data {
  show:boolean,
}

export default {
  name: 'App',
  components: {
    Collapse: require('./Collapse.vue').default,
  },
  data: ():Data => ({
    show: true,
  }),
};
</script>

<template lang="pug">
#app
  .container
    .row
      .col-12
        button(@click="show=!show") Show
      .col-12
        Collapse
          h1(v-show="show") hi Collapse
        h1 hi
</template>

<style lang="scss">
h1{
  border: 1px solid black;
  background: red;
  color: white;
  display: block;
}
</style>
