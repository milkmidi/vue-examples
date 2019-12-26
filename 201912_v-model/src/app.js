import Vue from 'vue';

import App from './components/App.vue';

Vue.filter('format', (value) => value);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
