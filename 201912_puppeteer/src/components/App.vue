<script>
import Form from './Form.vue';
import FormResult from './FormResult.vue';


export default {
  components: {
    FormResult,
    Form,
  },
  data: () => ({
    currentTag: 0,
    result: '',
  }),

};
</script>

<template lang="pug">
#app
  .container
    .row
      .col-2
        button.btn.btn-primary#button-tab-0(@click="currentTag = 0") Form
      .col-2
        button.btn.btn-info#button-tab-1(@click="currentTag = 1") Result
    Form(v-if="currentTag===0")
    FormResult(v-if="currentTag ===1")

</template>
