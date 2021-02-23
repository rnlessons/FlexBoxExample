import React from 'react';
import { View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function Component(props) {
  return (
    <ScreenContainer>
      <LayoutContainer
        style={{
          flexDirection: 'row',
          justifyContent: 'center', // default
          alignItems: 'center', // default
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
            alignSelf: 'flex-start',
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
