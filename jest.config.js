const { defaults } = require('jest-config');
const fetch = require('node-fetch');
defaults.moduleFileExtensions = ['js', 'json', 'jsx', 'ts', 'tsx', 'node'];

module.exports = {
  verbose: true,
  silent: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  preset: 'react-native',
  moduleFileExtensions: defaults.moduleFileExtensions,
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/node_modules/jest-enzyme/lib/index.js',
    '<rootDir>/node_modules/react-native/jest/setup.js',
  ],
  setupFiles: [
    'enzyme-react-16-adapter-setup',
  ],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  globals: {
    fetch,
  },
};