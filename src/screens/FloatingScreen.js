import React from 'react';
import { View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function Component() {
  return (
    <ScreenContainer title="FloatingScreen">
      <LayoutContainer
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            left: 10,
            top: 10,
            zIndex: 1,
            width: 50,
            height: 50,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            left: 10,
            top: 10,
            backgroundColor: 'green',
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
