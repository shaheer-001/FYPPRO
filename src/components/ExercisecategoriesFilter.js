import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, Exercisecategories } from "../constant";

const ExerciseCategoriesFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Exercisecategories.map((category, index) => {
          const isSelected = selectedCategory === category.category;
          return (
            <Pressable
              key={index}
              onPress={() => setSelectedCategory(category.category)}
              style={{
                backgroundColor: isSelected ? Colors.COLOR_PRIMARY : Colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 18,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  color: isSelected ? Colors.COLOR_LIGHT : Colors.COLOR_PRIMARY,
                  fontSize: 18,
                }}
              >
                {category.category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ExerciseCategoriesFilter;

const styles = StyleSheet.create({});
