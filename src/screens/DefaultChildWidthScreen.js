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
        <View style={{ height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ height: 50, backgroundColor: 'steelblue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
