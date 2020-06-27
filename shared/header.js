import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <AntDesign
        name="menuunfold"
        size={30}
        style={styles.headerIcon}
        onPress={openMenu}
      />
      <Text style={styles.headerText}>{title}</Text>
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
    fontWeight: "bold",
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
