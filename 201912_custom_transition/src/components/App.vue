<script>
import Collapse from './Collapse.vue';

export default {
  name: 'App',
  components: {
    Collapse,
  },
  data: () => ({
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
      .col-6
        transition(name="fade")
          h1(v-show="show") hi fade
      .col-6
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}


</style>
