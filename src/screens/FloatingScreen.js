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
            position: 'absolute',
            left: 20,
            top: 20,
            zIndex: 1,
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
