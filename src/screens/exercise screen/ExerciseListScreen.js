import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ExerciseCategoriesFilter from '../../components/ExercisecategoriesFilter'
import ExerciseCard from '../../components/ExerciseCard'

const ExerciseList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Aerobic');
  return (
    <View style={{flex: 1, marginHorizontal: 16}}>

      {/* categories filter*/}
      <View style={{marginTop: 22}}>
        <Text style={{fontSize: 22, fontWeight:"bold"}}>Categories</Text>
      {/* categories list */}
      <ExerciseCategoriesFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </View>

      {/* Meals List Filter */}
      <View style={{marginTop: 22, flex: 1}}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>Exercises</Text>

        {/* Meals List */}
        <ExerciseCard selectedCategory={selectedCategory}/>
      </View>
    </View>
  )
}

export default ExerciseList

const styles = StyleSheet.create({})

