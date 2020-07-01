import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { GlobalStyles } from "../styles/global";

const Header = ({ title, navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        style={styles.headerIcon}
        onPress={openMenu}
      />
      <Text style={[styles.headerText, GlobalStyles.boldText]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 20,
    color: "#FF8A5C",
    padding: 10,
  },
  headerIcon: {
    position: "absolute",
    left: 0,
    color: "#FF8A5C",
  },
});

export default Header;
