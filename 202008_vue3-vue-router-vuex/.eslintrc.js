module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'vue/no-v-model-argument': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'vue/no-multiple-template-root': 0,
  },
};
