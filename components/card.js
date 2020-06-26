import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Card({ data, answerHandler }) {
  console.log("DATA:", data);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{data.cardQ}</Text>
      </View>
      <View style={styles.cardIcons}>
        <TouchableOpacity onPress={() => answerHandler(false, data)}>
          <AntDesign
            style={styles.icon}
            name="closecircleo"
            size={30}
            color="#FF8A5C"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => answerHandler(true, data)}>
          <AntDesign
            style={styles.icon}
            name="checkcircleo"
            size={30}
            color="#FF8A5C"
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
  icon: {
    marginHorizontal: 50,
  },
});
