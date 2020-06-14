<script>
import { Validator } from 'simple-vue-validator';

export default {
  name: 'App',
  validators: {
    name: (value:string) => Validator.value(value).required('姓名欄位未填寫'),
    email: (value:string) => Validator.value(value).required('email欄位未填寫').email('無效的email格式'),
    mobile: (value:string) => Validator.value(value).required('電話欄位未填寫').regex(/^09\d{8}$/, '無效的手機格式'),
    is9527(value:string) {
      return Validator.custom(() => (value === '9527' ? null : '請輸入9527'));
    },
  },
  data: () => ({
    name: '',
    email: '',
    mobile: '',
    is9527: '',
  }),
  methods: {
    async submitHandler() {
      const success:boolean = await this.$validate();
      console.log(success);
      if (success) {
        console.log('可以呼叫 API 了');
      }
    },
  },
};
</script>

<template lang="pug">
#app
  .container
    form(@submit.prevent="submitHandler")
      .form-group
        label Name
        input.form-control(type="text" placeholder="your name" v-model="name")
        .error-msg(v-show="validation.hasError('name')") {{ validation.firstError('name') }}
      .form-group
        label Email address
        input.form-control(type="email" placeholder="name@example.com" v-model="email")
        .error-msg(v-show="validation.hasError('email')") {{ validation.firstError('email') }}
      .form-group
        label Mobile
        input.form-control(type="tel" placeholder="0912345678" v-model="mobile")
        .error-msg(v-show="validation.hasError('mobile')") {{ validation.firstError('mobile') }}
      .form-group
        label 客製化 Validator,
        input.form-control(type="tel" placeholder="請輸入 9527" v-model="is9527")
        .error-msg(v-show="validation.hasError('is9527')") {{ validation.firstError('is9527') }}
      button.btn.btn-primary(type="submit") Submit

</template>

<style lang="scss" scoped>
.container{
  max-width: 480px;
}
.error-msg{
  color: #e74c3c;
}
</style>
