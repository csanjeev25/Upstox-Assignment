import React from 'react';

export const findByDataTest = (Component, attr) => {
  const wrapper = Component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const findByTestID = (Component, attr) => {
  const wrapper = Component.find(`[testID='${attr}']`);
  return wrapper;
};

export const ShallowMock = (Component, props) => {
  return React.cloneElement(Component, props);
};