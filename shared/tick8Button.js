import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { GlobalStyles } from "../styles/global";

export default function Tick8Button({ text, pressHandler, icon }) {
  return (
    <TouchableOpacity onPress={pressHandler} style={styles.buttonContainer}>
      <Text style={[styles.buttonContent, GlobalStyles.boldText]}>{text}</Text>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color="#FCF9EA"
          style={styles.butttonIcon}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#FF8A5C",
    width: 300,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonContent: {
    alignSelf: "center",
  },
  butttonIcon: {
    alignSelf: "center",
    position: "absolute",
    left: 10,
  },
});
