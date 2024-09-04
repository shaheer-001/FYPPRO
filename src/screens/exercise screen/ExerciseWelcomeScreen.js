import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import ExerciseList from './ExerciseListScreen';
import ExerciseDetailScreen from './ExerciseDetailScreen';
import PreviousSelectionScreen from './PreviousSelectionScreen';

const Stack = createStackNavigator();

export default function ExerciseWelcomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ExerciseList" component={ExerciseList} />
        <Stack.Screen name="ExerciseDetailScreen" component={ExerciseDetailScreen} />
        <Stack.Screen name="PreviousSelection" component={PreviousSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

