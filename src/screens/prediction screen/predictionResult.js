import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PredictionResult = () => {
  const route = useRoute();
  const { loading, prediction} = route.params;
  const [displayLoading, setDisplayLoading] = useState(loading);
  const suggestions = [
    'Avoid Unhealthy Foods',
    'Visit Doctor for Regular Checkups',
    'Perform Exercise Daily'
  ]

  useEffect(() => {
    if (loading) {
      // Simulate a delay to show loading indicator
      setTimeout(() => {
        setDisplayLoading(false);
      }, 3000); // Change this duration as needed
    }
  }, [loading]);

  if (displayLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Predicting Heart Stroke</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        {prediction === 'Yes'
          ? "Oh, it looks like you might have a chance of having a heart stroke."
          : "You don't have a heart stroke."}
      </Text>
      <Text style={{fontSize: 16, marginTop: 10, fontWeight: '500'}}>Here are some Medical Suggestions:</Text>
      {suggestions.map((suggestion, index) => (
        <Text key={index} style={styles.suggestion}>
          {index + 1}: {suggestion}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  suggestion: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default PredictionResult;
