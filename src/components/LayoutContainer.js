import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenContainer from './ScreenContainer';

export default function LayoutContainer({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 5,
  },
});
