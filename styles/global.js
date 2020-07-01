import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9EA",
    alignItems: "center",
    justifyContent: "center",
  },
  regularText: {
    fontFamily: "Lato",
  },
  boldText: {
    fontFamily: "LatoBold",
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
  bottomRightContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  bottomLeftContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  addBtn: {
    backgroundColor: "#49BEB7",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
  },
  circleBtnContent: {
    color: "#FF8A5C",
    alignSelf: "center",
  },
  refreshBtn: {
    width: 50,
    height: 50,
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
  popupBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    top: 10,
    zIndex: 1,
    width: "80%",
    padding: 10,
    borderRadius: 15,
  },
  popupText: {
    fontWeight: "bold",
  },
  successBox: {
    backgroundColor: "rgba(40, 167, 69, 0.25)",
  },
  successText: {
    color: "#28A745",
  },
  warningBox: {
    backgroundColor: "rgba(255, 193, 7, 0.25)",
  },
  warningText: {
    color: "#FFC107",
  },
  dangerBox: {
    backgroundColor: "rgba(220, 53, 69, 0.25)",
  },
  dangerText: {
    color: "#DC3545",
  },
});
