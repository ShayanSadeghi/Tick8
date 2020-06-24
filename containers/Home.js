import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Card from "../components/card";
import AddButton from "../components/addButton";

import { GlobalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const onCardPressed = () => {
    navigation.navigate("CardInfo");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={GlobalStyles.card}
        onPress={() => onCardPressed()}>
        <Card />
      </TouchableOpacity>
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
