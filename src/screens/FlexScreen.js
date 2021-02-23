import React from 'react';
import { View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function Component() {
  return (
    <ScreenContainer>
      <LayoutContainer
        style={{
          flexDirection: 'column',
        }}>
        <View style={{ flex: 1, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 1, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 1, height: 50, backgroundColor: 'steelblue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
