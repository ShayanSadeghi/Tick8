import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CardInfo() {
  return (
    <View style={styles.container}>
      <Text> Card Info</Text>
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
