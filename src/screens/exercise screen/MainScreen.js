// MainScreen.js

/*import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <Text style={{marginBottom: 12, marginTop: 25, fontSize: 20, marginLeft: 15,}}>Select any type of exercise:</Text>
      <View style={styles.container1}>
      <Text style={styles.exTypeDetail}>
      Gait training is a set of exercises that are specifically implemented by your physical therapist 
      to help you walk better. The exercises involve improving motion in your lower extremity joints, 
      improving strength and balance, and mimicking the repetitive nature of your legs
      that occur while walking.
      </Text>
      <View style={styles.smallButton}>
      <Button title="Gait Exercises" onPress={() => {navigation.navigate('ExerciseList', { exerciseType: 'Gait' });
      Alert.alert('Consult a physiotherapist before starting a new fitness program')}}/>
      </View></View>
      <View style={styles.container2}>
      <Text style={styles.exTypeDetail}>
      Aerobic exercise refers to the type of repetitive, structured physical activity that requires 
      the body’s metabolic system to use oxygen to produce energy. Aerobic exercises improves the 
      capacity of the cardiovascular system to uptake and transport oxygen. Aerobic exercise is 
      considered the cornerstone of endurance training, characterized by moderate energy expenditure 
      over a prolonged period of time. It is any activity that uses large muscle groups, 
      can be maintained continuously and is rhythmic in nature.
      </Text>
      <View style={styles.smallButton}>
      <Button title="Aerobic Exercises" onPress={() => {navigation.navigate('ExerciseList', { exerciseType: 'Aerobic' });
      Alert.alert('Consult a physiotherapist before starting a new fitness program')}} />
      </View></View>
      <View style={styles.container3}>
      <Text style={styles.exTypeDetail}>
      Strength training (also known as resistance exercise) increases muscle strength by making 
      muscles work against a weight or force. Different forms of strength training include 
      using your own body weight, free weights, weight machines, and resistance bands. A beginner 
      needs to train two or three times per week to gain the maximum benefit. 
      </Text>
      <View style={styles.smallButton}>
      <Button title="Strength exercises" onPress={() => {navigation.navigate('ExerciseList', { exerciseType: 'Strength' });
      Alert.alert('Consult a physiotherapist before starting a new fitness program')}} />
      </View></View>
    </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    container1:{
        backgroundColor: '#dcdcdc',
        paddingBottom: 25,
        paddingTop: 15,
    
    },
    container2: {
        backgroundColor: '#DCFFFF',
        paddingBottom: 20,
        paddingTop: 10
    },
    container3: {
        backgroundColor: '#dcdcdc',
        paddingBottom: 35,
        paddingTop: 15
    },
    smallButton: {
        marginLeft: 105,
        marginRight: 105,
    },
    exTypeDetail: {
        textAlign: 'center',
        marginBottom: 12, 
        marginTop: 15, 
        marginLeft: 15,
        marginRight: 15
    }
});



export default MainScreen;
*/
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const MainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../../assets/images/th.jpg")} />

      <Text style={{ color: "#f96163", fontSize: 30, fontWeight: "bold", marginTop: 50}}>
        Explore Exercises
      </Text>

      <Text
        style={{
          fontSize: 45,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 55,
          marginBottom: 100,
        }}
      >
        View Different Exercises
      </Text>

      <TouchableOpacity
      onPress={()=>navigation.navigate("ExerciseList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "30%",
          alignItems: "center",
          marginTop: -50 ,
        }}
      >
        <Text style={{fontSize: 18, color: "#fff", fontWeight: 700}}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;

