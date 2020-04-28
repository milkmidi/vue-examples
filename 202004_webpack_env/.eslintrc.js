module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {},
    },
  },
  rules: {
    'import/no-unresolved': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-alert': 0,
    'global-require': 0,
  },
};
