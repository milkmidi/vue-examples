module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-flow',
  ],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@': './src',
      },
    }],
  ],
};
