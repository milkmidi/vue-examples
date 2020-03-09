<script>

export default {
  name: 'CheckboxExampleVue',
  data: () => ({
    checkList: [{ key: 0, value: 'react' }],
  }),
};
</script>

<template>
  <section data-name="CheckboxExample.vue">
    <p>{{ checkList }}</p>
    <label>
      <input
        v-model="checkList"
        type="checkbox"
        :value="{key:0, value:'react'}"
      >React
    </label>
    <label>
      <input
        v-model="checkList"
        type="checkbox"
        :value="{key:1, value:'vue'}"
      >Vue</label>
    <label />
  </section>
</template>
