<script>
export default {
  name: 'FilterExampleVue',
  components: {
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  props: {
  },
  data: () => ({
    name: 'milkmidi',
  }),
  computed: {
  },
  watch: {
  },
  mounted() {
    console.log(this._f);
  },
  beforeDestroy() {
  },
  methods: {
  },
};
</script>

<template lang="pug">
section(data-name="FilterExample.vue")
  h1 {{name | capitalize | format(123)}}
</template>
