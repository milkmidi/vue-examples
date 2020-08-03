import { createApp } from 'vue';
import Modal from '@/components/Modal.vue';
import router from '@/router';
import store from '@/store';

import './app.scss';
import App from './App.vue';

createApp(App)
  .use(router)
  .use(store)
  .component('Modal', Modal)
  .mount('#app');
