const InputRenderFunctionExample = {
  name: 'InputRenderFunctionExample.js',
  data() {
    return {
      input: '',
    };
  },
  render(h) {
    const data = {
      attrs: {
        'data-name': 'InputRenderFunctionExample.js',
      },
    };
    return (
      h('section', data, [
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
export default InputRenderFunctionExample;
