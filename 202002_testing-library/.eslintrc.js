module.exports = {
  root: true,
  env: {
    // https://eslint.org/docs/user-guide/configuring#specifying-environments
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:testing-library/vue',
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  plugins: [
    'vue',
    'flowtype',
    'testing-library',
  ],
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
