// PreviousSelectionScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const PreviousSelectionScreen = () => {
  // Mock previous selections
  const previousSelections = ['Gait', 'Aerobic', 'Strength'];

  return (
    <View>
      <Text>Previous Selections:</Text>
      {previousSelections.map((selection, index) => (
        <Text key={index}>{selection}</Text>
      ))}
    </View>
  );
};

export default PreviousSelectionScreen;
