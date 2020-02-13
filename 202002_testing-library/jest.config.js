module.exports = {
  testURL: 'http://localhost/',
  // verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  testEnvironment: 'jest-environment-jsdom-global',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!MODULE_NAME_HERE).+\\.js$',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
};
