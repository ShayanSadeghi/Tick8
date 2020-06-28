import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EA",
    alignItems: "center",
    justifyContent: "center",
  },
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
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 24,
    minHeight: 70,
  },
  addBtn: {
    backgroundColor: "#49BEB7",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
  },
  circleBtnContent: {
    color: "#FF8A5C",
    alignSelf: "center",
  },
  refreshBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#49BEB7",
  },
  modalContainer: {
    backgroundColor: "#FCF9EA",
    alignItems: "center",
    flex: 1,
  },
  inputText: {
    width: 300,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 30,
    backgroundColor: "#EFEFEF",
  },
  errorText: {
    color: "#FF8A5C",
    marginTop: 10,
    fontWeight: "bold",
  },
  modalButtons: {
    bottom: 0,
    flexDirection: "row",
    height: 50,
  },
  modalButtonClose: {
    width: "50%",
    backgroundColor: "#FF8A5C",
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonAdd: {
    width: "50%",
    backgroundColor: "#49BEB7",
    justifyContent: "center",
    alignItems: "center",
  },
});
