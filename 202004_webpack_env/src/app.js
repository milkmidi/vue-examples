import Vue from 'vue';
import App from '@/components/App.vue';
import './css/app.scss';

console.log('process.env.CUSTOM_DATA', process.env.CUSTOM_DATA);

console.log('process.env.MY_STRING', process.env.MY_STRING);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
