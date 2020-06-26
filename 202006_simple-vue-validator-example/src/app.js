import Vue, { CreateElement } from 'vue';
import App from '@/components/App.vue';
import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

new Vue({
  render: (h:CreateElement) => h(App),
}).$mount('#app');
