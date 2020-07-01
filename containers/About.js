import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function About({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text style={styles.centerText}>
        It is a free app to save your environment. We want you to stop using
        paper for learning purposes.{"\n"}
        {"\n"}
        Create your flash card in this app, try to answer them correctly for 8
        days in row, After that it's so rare to forget them soon.{"\n"}
        {"\n"}
        But if you forget them, don't be worry, you can go to "Completed Cards"
        section and re-use them again.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: 18,
    lineHeight: 30,
  },
});
