const JSX = {
  name: 'JSX.js',
  data() {
    return {
      input: 'JSX',
    };
  },
  render() {
    return (
      <section data-name="JSX.js">
        <h1>{this.input}</h1>
        <input value={this.input}
          onInput={(event) => { this.input = event.target.value; }}
          />
        <input v-model={this.input} />
      </section>
    );
  },
};
export default JSX;
