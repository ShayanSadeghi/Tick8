import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Card from "./components/card";
import AddButton from "./components/addButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Tick-8</Text>
      </View>
      <Card />
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 0,
    backgroundColor: "#49BEB7",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FCF9EA",
    alignItems: "center",
    justifyContent: "center",
  },
});
