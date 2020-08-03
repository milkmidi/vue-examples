import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

import Home from '../pages/Home';

const About = defineAsyncComponent(() => import('@/pages/About'));

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/about', component: About,
    },
  ],
});

export default router;
