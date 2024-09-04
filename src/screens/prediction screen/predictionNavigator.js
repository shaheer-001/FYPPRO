import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StrokePrediction from "./strokePrediction";
import PredictionResult from "./predictionResult";

const stack = createStackNavigator();

function PredictionNavigator()  {
  return (
    <NavigationContainer independent={true}>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Stroke Prediction" component={StrokePrediction} />
        <stack.Screen name="PredictionResult" component={PredictionResult} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default PredictionNavigator;

const styles = StyleSheet.create({});
