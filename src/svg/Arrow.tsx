import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

export const Arrow = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 10 10" preserveAspectRatio="none">
      <Polygon points="5,0 10,10 0,10" fill="#c595fa" />
    </Svg>
  );
};
