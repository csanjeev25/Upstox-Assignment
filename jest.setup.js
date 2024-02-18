import * as ReactNative from 'react-native';

jest.useFakeTimers();

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

afterAll(() => {
  jest.restoreAllMocks();
});

global.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native-reanimated', () => ({
  // @ts-ignore
  ...jest.requireActual('react-native-reanimated/mock'),
  useSharedValue: jest.fn,
  useAnimatedStyle: jest.fn,
  withTiming: jest.fn,
  withSpring: jest.fn,
  withRepeat: jest.fn,
  withSequence: jest.fn,
  useAnimatedProps: jest.fn,
  Easing: {
    linear: jest.fn,
    elastic: jest.fn,
    out: jest.fn,
  },
}));