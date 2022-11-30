module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.+css$': require.resolve('./test/mock-style.js'),
  },
}
