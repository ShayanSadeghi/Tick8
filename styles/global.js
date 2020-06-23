import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 0,
    backgroundColor: "#49BEB7",
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
  addBtn: {
    backgroundColor: "#49BEB7",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    right: 20,
    borderRadius: 30,
    justifyContent: "center",
  },
  addBtnContent: {
    color: "#FF8A5C",
    alignSelf: "center",
  },
});
