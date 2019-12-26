<script>
const InputExample = () => import(/* webpackChunkName: "InputExample" */'./InputExample.vue');
const InputRenderFunctionExample = () => import(/* webpackChunkName: "InputRenderFunctionExample" */'./InputRenderFunctionExample');
const JSX = () => import(/* webpackChunkName: "JSX" */'./JSX');
const CheckboxExample = () => import(/* webpackChunkName: "CheckboxExample" */'./CheckboxExample.vue');
const MethodsExample = () => import(/* webpackChunkName: "MethodsExample" */'./MethodsExample.vue');
const Functional = () => import(/* webpackChunkName: "Functional" */'./Functional.vue');
const SlotExample = () => import(/* webpackChunkName: "Slot" */'./Slot.vue');
const MyScopedSlotsExample = () => import(/* webpackChunkName: "MyScopedSlotsExample" */'./MyScopedSlotsExample.vue');
const FilterExample = () => import(/* webpackChunkName: "FilterExample" */'./FilterExample.vue');


export default {
  components: {
    InputExample,
    InputRenderFunctionExample,
    CheckboxExample,
    MethodsExample,
    Functional,
    JSX,
    SlotExample,
    MyScopedSlotsExample,
    FilterExample,
  },
  mounted() {
    // installRenderHelpers
    // https://github.com/vuejs/vue/blob/dev/src/core/instance/render-helpers/index.js

    // looseIndexOf
    // https://github.com/vuejs/vue/blob/dev/src/shared/util.js#L325-L330
    // console.log(this._i);
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
      <JSX />
      <SlotExample>
        <template v-slot="{categories}">
          <h2>I'm Slot {{ categories }}</h2>
        </template>
        <template #footer="{footerData}">
          <h2>I'm Slot {{ footerData }}</h2>
        </template>
      </SlotExample>
      <MyScopedSlotsExample />
      <FilterExample />
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
section::before{
  z-index: 1;
  content: attr(data-name);
  pointer-events: none;
  border-radius: .25rem;
  padding: 0.1rem;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background-color:#e74c3c;
  font-size: 16px;
}
</style>
