const RenderComponent = {
  data() {
    return {
      input: '',
    };
  },
  render(h) {
    return (
      h('section', null, [
        h('input', {
          domProps: {
            value: this.input,
          },
          on: {
            input: (event) => {
              this.input = event.target.value;
            },
          },
        }),
      ])
    );
  },
};
export default RenderComponent;
