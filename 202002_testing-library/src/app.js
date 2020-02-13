import Vue, { CreateElement } from 'vue';
import 'css/style.scss';
import App from '@/components/App.vue';

new Vue({
  render(h:CreateElement) {
    return h(App);
  },
}).$mount('#app');
