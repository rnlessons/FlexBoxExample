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
        <View style={{ flex: 1, height: 50, backgroundColor: 'red' }} />
        <View style={{ flex: 1, height: 50, backgroundColor: 'green' }} />
        <View style={{ flex: 1, height: 50, backgroundColor: 'blue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
