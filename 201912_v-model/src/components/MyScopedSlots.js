
export default {
  inheritAttrs: false,
  name: 'MyScopedSlots',
  props: {
  },
  data() {
    return {
      name: 'milkmidi',
    };
  },

  methods: {
    update(value) {
      console.log(value);
      this.name = value;
    },
  },
  render(h) {
    const slotNode = this.$scopedSlots.default({
      name: this.name,
      update: this.update,
    });
    if (Array.isArray(slotNode)) {
      if (slotNode.length > 1) {
        return h('div', { class: 'checkbox-group-all' }, slotNode);
      }
      return slotNode[0];
    }
    return slotNode;
  },
};
