import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../styles/global";

export default function Settings({ navigation }) {
  const onCardPressed = () => {
    navigation.navigate("CardInfo");
  };

  return (
    <View style={styles.container}>
      <Text>Settings page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EA",
    alignItems: "center",
    justifyContent: "center",
  },
});
