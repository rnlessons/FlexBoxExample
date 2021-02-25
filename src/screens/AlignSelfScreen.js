import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function AlignSelfScreen() {
  return (
    <ScreenContainer title="AlignSelfScreen">
      <LayoutContainer
        style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
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
      <LayoutContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            alignSelf: 'flex-end',
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
      </LayoutContainer>
      <LayoutContainer
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            alignSelf: 'flex-start',
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            alignSelf: 'center',
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
