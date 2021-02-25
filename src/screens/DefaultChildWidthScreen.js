import React from 'react';
import { View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function Component(props) {
  return (
    <ScreenContainer>
      <LayoutContainer
        style={{
          flexDirection: 'column',
          // justifyContent: 'flex-start', // default
          // alignItems: 'flex-start', // default
        }}>
        <View style={{ height: 50, backgroundColor: 'red' }} />
        <View style={{ height: 50, backgroundColor: 'green' }} />
        <View style={{ height: 50, backgroundColor: 'blue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
