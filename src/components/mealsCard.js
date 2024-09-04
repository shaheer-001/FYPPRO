import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Colors, Foods } from "../constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MealsCard = ({selectedCategory}) => {
  const navigation = useNavigation();
  const filteredMeals = Foods.filter((meal) => meal.category === selectedCategory );
  return (
    <View>
      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => (
          <Pressable
          onPress={()=> navigation.navigate("MealsDetails", {item: item})}
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
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text>{item.time}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginRight: 4 }}>{item.rating}</Text>
              <FontAwesome name="star" size={16} color={Colors.COLOR_PRIMARY} />
            </View>
          </Pressable>
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

export default MealsCard;

const styles = StyleSheet.create({});
