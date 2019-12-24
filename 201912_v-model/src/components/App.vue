<script>
const InputExample = () => import(/* webpackChunkName: "InputExample" */'./InputExample.vue');
const InputRenderFunctionExample = () => import(/* webpackChunkName: "InputRenderFunctionExample" */'./InputRenderFunctionExample');
const CheckboxExample = () => import(/* webpackChunkName: "CheckboxExample" */'./CheckboxExample.vue');
const MethodsExample = () => import(/* webpackChunkName: "MethodsExample" */'./MethodsExample.vue');
const Functional = () => import(/* webpackChunkName: "Functional" */'./Functional.vue');


export default {
  components: {
    InputExample,
    InputRenderFunctionExample,
    CheckboxExample,
    MethodsExample,
    Functional,
  },
  mounted() {
    // installRenderHelpers
    // https://github.com/vuejs/vue/blob/dev/src/core/instance/render-helpers/index.js

    // looseIndexOf
    // https://github.com/vuejs/vue/blob/dev/src/shared/util.js#L325-L330
    console.log(this._i);
  },
  methods: {
    functionalClick() {
      console.log('functionalClick');
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <InputExample />
      <InputRenderFunctionExample />
      <CheckboxExample />
      <MethodsExample />
      <Functional
        name="milkmidi"
        @click="functionalClick"
      />
    </div>
  </div>
</template>

<style lang="scss">
section{
  border: 2px solid #bdc3c7;
  margin: 10px 0;
  padding: 1.5rem 1rem 1rem;
  border-radius: 8px;
  position: relative;
}
</style>
