<script>
/* eslint no-return-assign:0, no-param-reassign:0 */
import Vue from 'vue';

const transitionHook = {
  beforeEnter(el) {
    el.classList.add('collapse-animate-enter');
  },
  enter(el) {
    el.style['max-height'] = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.classList.remove('collapse-animate-enter');
  },
  beforeLeave(el) {
    el.classList.add('collapse-animate-leave');
    el.style['max-height'] = `${el.scrollHeight}px`;
  },
  leave(el) {
    Vue.nextTick(() => el.style['max-height'] = 0);
  },
  afterLeave(el) {
    el.classList.remove('collapse-animate-leave');
  },
};

const Collapse = {
  name: 'Collapse',
  functional: true,
  render(h, { children }) {
    const data = {
      on: transitionHook,
    };
    return h('transition', data, children);
  },
};
export default Collapse;

</script>
<style lang="scss">
.collapse-animate-leave , .collapse-animate-enter {
  overflow: hidden;
  transition: max-height 1.35s;
}
</style>
