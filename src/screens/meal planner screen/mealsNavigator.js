import React from "react";
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./welcomeScreen";
import MealsList from "./mealsList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MealsDetails from "./mealsDetails";

const stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return(
        <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer independent={true}>
           <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="Welcome" component={WelcomeScreen}/>
            <stack.Screen name="MealsList"  component={MealsList}/>
            <stack.Screen name="MealsDetails" component={MealsDetails}/>
           </stack.Navigator>
        </NavigationContainer>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({});

export default MealsNavigator;