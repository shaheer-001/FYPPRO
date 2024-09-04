import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../../assets/images/salad.jpg")} />

      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        Explore Healthy Meals
      </Text>

      <Text
        style={{
          fontSize: 38,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 80,
        }}
      >
        View Food Recipes
      </Text>

      <TouchableOpacity
      onPress={()=>navigation.navigate("MealsList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center"
        }}
      >
        <Text style={{fontSize: 18, color: "#fff", fontWeight: 700}}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
