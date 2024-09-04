import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios'; 
import { useNavigation } from '@react-navigation/native';

const StrokePrediction = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBMI] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [hyperTension, setHyperTension] = useState('');
  const [married, setMarriageStatus] = useState('');
  const [workType, setWorkType] = useState('');
  const [smoking, setSmokingStatus] = useState('');
  const [residence, setResidence] = useState('');
  const [heartDisease, setHeartDisease] = useState('');

  const navigation = useNavigation();

  const handlePredict = async () => {
    const data = {
      age: parseFloat(age),
      gender: String(gender),
      bmi: parseFloat(bmi),
      avg_glucose_level: parseFloat(glucoseLevel),
      hypertension: parseInt(hyperTension),
      ever_married: String(married),
      work_type: String(workType),
      smoking_status: String(smoking),
      residence_type: String(residence),
      heart_disease: parseInt(heartDisease)
    };
  
    try {
      const response = await axios.post('http://192.168.187.147:5000/predict', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const haveStroke = response.data.stroke;
      const predictionResult = haveStroke === "True" ? "Yes" : "No";

      // Navigate to the PredictionResult screen
      navigation.navigate('PredictionResult', {
        loading: true,
        prediction: predictionResult,
      });

    } catch (error) {
      console.error('Error fetching prediction:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Enter Your Details for Stroke Prediction</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender (Male, Female, Other)"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="BMI"
        value={bmi}
        onChangeText={setBMI}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Glucose Level"
        value={glucoseLevel}
        onChangeText={setGlucoseLevel}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Hypertension"
        value={hyperTension}
        onChangeText={setHyperTension}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Heart Disease"
        value={heartDisease}
        onChangeText={setHeartDisease}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Married? (Yes/No)"
        value={married}
        onChangeText={setMarriageStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Work Type? (children, govt_job, self-employed, private, never_worked, unknown)"
        value={workType}
        onChangeText={setWorkType}
      />
      <TextInput
        style={styles.input}
        placeholder="Do you Smoke? (never smoked, formely smoked, smokes, unknown)"
        value={smoking}
        onChangeText={setSmokingStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Residence (urban, rural)"
        value={residence}
        onChangeText={setResidence}
      />
      <Button title="Predict" onPress={handlePredict} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default StrokePrediction;
