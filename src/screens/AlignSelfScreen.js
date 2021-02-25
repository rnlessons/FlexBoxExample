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
            backgroundColor: 'red',
            alignSelf: 'flex-start',
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
