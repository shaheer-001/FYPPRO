import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PredictionNavigator from './src/screens/prediction screen/predictionNavigator';
import MealsNavigator from './src/screens/meal planner screen/mealsNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SignupScreen from './src/screens/Signup';
import LoginScreen from './src/screens/Login';
import ExerciseWelcomeScreen from './src/screens/exercise screen/ExerciseWelcomeScreen';
import HomeScreen from './src/screens/homeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Sign Up"
        component={SignupScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="account-circle" size={24} color="black" />
          )
        }}
        />
        <Tab.Screen 
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="login" size={24} color="black" />
          )
        }}
        />
         <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={24} color="black" />
          )
        }}
        />
        <Tab.Screen
          name="Stroke Prediction"
          component={PredictionNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="heartbeat" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Meal Planner"
          component={MealsNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="utensils" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Exercises" 
          component={ExerciseWelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Entypo name="man" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
