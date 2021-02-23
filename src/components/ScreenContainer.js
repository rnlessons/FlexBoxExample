import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function ScreenContainer({ children, title }) {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 20 }}>
        {title}
      </Text>
      {children}
    </SafeAreaView>
  );
}
