<script>
/* eslint no-return-assign:0, no-param-reassign:0 */
import Vue from 'vue';

const transitionHook = {
  enter(el) {
    el.style['max-height'] = `${el.scrollHeight}px`;
  },
  beforeLeave(el) {
    el.style['max-height'] = `${el.scrollHeight}px`;
  },
  leave(el) {
    Vue.nextTick(() => el.style['max-height'] = 0);
  },
};

const Collapse = {
  name: 'Collapse',
  functional: true,
  render(h, { children }) {
    const data = {
      on: transitionHook,
      attrs: {
        name: 'collapse',
      },
    };
    return h('transition', data, children);
  },
};
export default Collapse;

</script>
<style lang="scss" scoped>
.collapse-enter-active,
.collapse-leave-active {
  overflow: hidden;
  transition: max-height 1.35s;
}
</style>
