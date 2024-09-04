import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ExerciseDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  //console.log(item);
  return (
    <View style={{ backgroundColor: "#6f4e37", flex: 1 }}>
      <View style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </TouchableOpacity>
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
            source={item.ExerciseImage}
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
          {item.ExerciseName}
        </Text>
        <Text style={{ fontSize: 18, marginVertical: 16, textAlign: "center" }}>
          {item.ExerciseDescription}
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
                  {item.ExerciseTime}
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
                <Text style={{ fontSize: 28, textAlign: "center" }}>💪</Text>
                <Text style={{ fontSize: 15, fontWeight: 400 }}>
                  {item.ExerciseDifficulty}
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
                  {item.ExerciseCalories}
                </Text>
              </View>
            </View>

            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                Details
              </Text>
              {item.ExerciseInformation.map((Exercise) => {
                return (
                  <Text
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{` ${Exercise}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({});

