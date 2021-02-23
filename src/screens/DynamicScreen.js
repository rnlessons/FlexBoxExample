import React, { useState } from 'react';
import { View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';
import LayoutController from '../components/LayoutController';

export default function Component(props) {
  const [flexDirection, setFlexDirecion] = useState('column');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');

  return (
    <ScreenContainer>
      <LayoutContainer
        style={{
          flexDirection,
          justifyContent,
          alignItems,
        }}>
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </LayoutContainer>
      <LayoutController
        flexDirection={flexDirection}
        setFlexDirecion={setFlexDirecion}
        justifyContent={justifyContent}
        setJustifyContent={setJustifyContent}
        alignItems={alignItems}
        setAlignItems={setAlignItems}
      />
    </ScreenContainer>
  );
}
