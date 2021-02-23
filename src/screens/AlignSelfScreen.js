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
          // justifyContent: 'flex-start', // default
          // alignItems: 'flex-start', // default
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
            alignSelf: 'flex-start',
          }}
        />
      </LayoutContainer>
    </ScreenContainer>
  );
}
