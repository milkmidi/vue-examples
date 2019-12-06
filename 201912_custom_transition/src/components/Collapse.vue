<script>
/* eslint no-return-assign:0, no-param-reassign:0 */
const transitionHook = {
  beforeEnter(el:HTMLElement) {
    el.style['max-height'] = '0';
  },
  enter(el:HTMLElement) {
    el.style['max-height'] = `${el.scrollHeight}px`;
  },
  beforeLeave(el:HTMLElement) {
    el.style['max-height'] = `${el.scrollHeight}px`;
  },
  leave(el:HTMLElement) {
    setTimeout(() => el.style['max-height'] = '0', 0);
  },
};

export default {
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

</script>

<style lang="scss" scoped>
.collapse-enter-active,
.collapse-leave-active {
  overflow: hidden;
  transition: max-height 1.35s;
}
</style>
