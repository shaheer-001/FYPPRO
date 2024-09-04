import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import { Exercises, Colors } from "../constant";
import { useNavigation } from "@react-navigation/native";

const ExerciseCard = ({selectedCategory}) => {
  const navigation = useNavigation();
  const filteredExercises = Exercises.filter((exercise) => exercise.category === selectedCategory );
  return (
    <View>
      <FlatList
        data={filteredExercises}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => navigation.navigate("ExerciseDetailScreen", {item: item})}
            style={{
              backgroundColor: Colors.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
            }}
          >
            <Image
              source={item.ExerciseImage}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text>{item.ExerciseName}</Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text>{item.ExerciseTime}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({});
