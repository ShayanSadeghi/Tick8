import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Card({ data, answerHandler }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{data.cardQ}</Text>
      </View>
      <View style={styles.cardIcons}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => answerHandler(false, data)}>
          <MaterialIcons
            style={styles.icon}
            name="close"
            size={30}
            color="#FCF9EA"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => answerHandler(true, data)}>
          <MaterialIcons
            style={styles.icon}
            name="check"
            size={30}
            color="#FCF9EA"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    width: 300,
    minHeight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {},
  cardIcons: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  iconContainer: {
    backgroundColor: "#FF8A5C",
    width: 30,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 40,
  },
  icon: {},
});
