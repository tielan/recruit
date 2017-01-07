import React from 'react';

import  {
  UIManager,
  
} from 'react-native';
import ReactNative from 'react-native';

export  default function (ref, debug) {
  const handle = ReactNative.findNodeHandle(ref);
  setTimeout(() => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY);
      }
      ref._currentPosition(pageX, pageY);
    });
  }, 1);
};
