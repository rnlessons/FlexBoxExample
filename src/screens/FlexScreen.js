import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function FlexScreen() {
  return (
    <ScreenContainer title="FlexScreen">
      <LayoutContainer>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'green' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </LayoutContainer>
      <LayoutContainer>
        <View style={{ flex: 2, backgroundColor: 'red' }} />
        <View style={{ flex: 3, backgroundColor: 'green' }} />
        <View style={{ flex: 2, backgroundColor: 'blue' }} />
      </LayoutContainer>
      <LayoutContainer style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'green' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </LayoutContainer>
      <LayoutContainer style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'green' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
