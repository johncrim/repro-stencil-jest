
module.exports = {
  preset: '@stencil/core/testing',
  testRegex: '/src/.*\\.spec\\.(ts|tsx|js)$',
  testRunner: 'jest-jasmine2',
  transform: {
    '^.+\\.(ts|tsx|jsx|css|mjs)$': '@stencil/core/testing/jest-preprocessor.js',
  }
};
