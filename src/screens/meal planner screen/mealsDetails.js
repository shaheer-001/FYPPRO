import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const MealsDetails = ({ navigation, route }) => {
  const { item } = route.params;
  //console.log(item);
  return (
    <View style={{ backgroundColor: "#6f4e37", flex: 1 }}>
      <View style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
            marginLeft: 55,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text
          style={{
            marginTop: 160,
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
        <Text style={{ fontSize: 18, marginVertical: 16, textAlign: "center" }}>
          {item.description}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.38)",
                  paddingHorizontal: 26,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28, textAlign: "center" }}>🕐</Text>
                <Text style={{ fontSize: 15, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)",
                  paddingHorizontal: 26,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28, textAlign: "center" }}>🍲</Text>
                <Text style={{ fontSize: 15, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.48)",
                  paddingHorizontal: 26,
                  paddingVertical: 26,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28, textAlign: "center" }}>🔥</Text>
                <Text style={{ fontSize: 15, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                Ingredients:
              </Text>
              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 4,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                Recipe:
              </Text>
              {item.recipe.map((recipe, index) => {
                return (
                  <Text
                  key={index}
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1} ) ${recipe}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({});
