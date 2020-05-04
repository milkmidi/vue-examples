
import Vue from 'vue';
import MyNavigation from '@/components/MyNavigation.vue';
import MyFooter from '@/components/MyFooter.vue';

if (typeof window.Vue === 'undefined') {
  throw new Error('Vue is not available in your browser.');
}

document.addEventListener('DOMContentLoaded', () => {
  const myComponents = document.querySelectorAll('my-navigation,my-footer');
  [].forEach.call(myComponents, (el:HTMLElement) => {
    new Vue({
      el,
      components: {
        'my-navigation': MyNavigation,
        'my-footer': MyFooter,
      },
    }).$mount(el);
  });
});
