import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Tick-8</Text>
      </View>

      <TouchableOpacity style={styles.card}>
        <Text>Hi</Text>
      </TouchableOpacity>
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

  card: {
    backgroundColor: "#BADFDB",
    padding: 10,
    width: "90%",
    alignItems: "center",
    borderRadius: 24,
    height: 70,
  },
});
