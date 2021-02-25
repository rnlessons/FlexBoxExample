import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function FloatingScreen() {
  return (
    <ScreenContainer title="FloatingScreen">
      <LayoutContainer>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: 50,
            height: 50,
            backgroundColor: 'red',
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />

        <LayoutContainer>
          <View
            style={{
              position: 'relative',
              left: 10,
              top: 10,
              zIndex: 1,
              width: 50,
              height: 50,
              backgroundColor: 'red',
            }}
          />
          <View
            style={{
              position: 'relative',
              left: 10,
              top: 10,
              width: 50,
              height: 50,
              backgroundColor: 'green',
            }}
          />
          <View
            style={{
              position: 'relative',
              left: 10,
              top: 10,
              width: 50,
              height: 50,
              backgroundColor: 'blue',
            }}
          />
        </LayoutContainer>

        <LayoutContainer>
          <View
            style={{
              position: 'absolute',
              left: 10,
              top: 10,
              right: 10,
              bottom: 10,
              zIndex: 1,
              backgroundColor: 'red',
            }}
          />
        </LayoutContainer>
        <LayoutContainer>
          <View
            style={{
              position: 'relative',
              left: 10,
              top: 10,
              width: 50,
              height: 50,
              zIndex: 1,
              backgroundColor: 'red',
            }}
          />
        </LayoutContainer>
      </LayoutContainer>
    </ScreenContainer>
  );
}
