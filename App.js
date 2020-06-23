import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Card from "./components/card";
import AddButton from "./components/addButton";
import Header from "./shared/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <AddButton />
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
