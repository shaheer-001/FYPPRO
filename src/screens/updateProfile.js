import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UpdateProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [error, setError] = useState('');

  const handleUpdateProfile = () => {
    // Here you would implement your update profile logic, such as sending a request to your backend server
    // For simplicity, I'm just checking if all fields are filled
    if (name === '' || age === '' || gender === '' || weight === '' || medicalHistory === '') {
      setError('Please fill in all fields');
      return;
    }
    
    // If update is successful, you can navigate to another screen or perform any other action
    // For now, I'm just clearing the fields
    setName('');
    setAge('');
    setGender('');
    setWeight('');
    setMedicalHistory('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Update Profile</Text>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Medical History"
        value={medicalHistory}
        onChangeText={setMedicalHistory}
        multiline
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
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
    fontSize: 24,
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default UpdateProfileScreen;