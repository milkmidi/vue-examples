<script>


export default {
  data: () => ({
    name: '',
    email: '',
    country: '',
    gender: '',
    skill: [],

    result: '',
  }),
  methods: {
    submitHandler() {
      console.log('submitHandler', this.$data);
      fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(this.$data),
      }).then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.result = response.status;
        });
    },
  },
};
</script>

<template lang="pug">
form(@submit.prevent="submitHandler")
  .form-group
    label Name
    input.form-control(v-model="name")
  .form-group
    label Email
    input.form-control#input-email(type="email" v-model="email")
  .form-group
    label Country
    select.form-control#select-country(v-model="country")
      option(value="0") 台灣1
      option(value="1") 台灣2
      option(value="2") 台灣3
  .form-group
    label Gender
    div
      .form-check-inline
        label
          input#radio-gender-1(type="radio" value="1" name="gender" v-model="gender")
          |男
      .form-check-inline
        label
          input#radio-gender-0(type="radio" value="0" name="gender" v-model="gender")
          |女
  .form-group
    label Skill
    div
      .form-check-inline
        label
          input#checkbox-skill-0(type="checkbox" value="Vue" v-model="skill")
          |Vue
      .form-check-inline
        label
          input#checkbox-skill-1(type="checkbox" value="React" v-model="skill")
          |React
      .form-check-inline
        label
          input#checkbox-skill-2(type="checkbox" value="Angular" v-model="skill")
          |Angular
  button.btn.btn-primary#button-submit(type="submit") Submit
</template>
