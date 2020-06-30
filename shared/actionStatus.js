import React, { useRef } from "react";
import { StyleSheet, Animated, View, Text } from "react-native";

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        ...props.style,
        zIndex: 1,
        justifyContent: "center",
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default function ActionStatus({ popupData }) {
  const boxColor = popupData.type + "Box";
  const textColor = popupData.type + "Text";

  return (
    <FadeInView>
      <View style={styles[boxColor]}>
        <Text style={styles[textColor]}>{popupData.message}</Text>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  successBox: {
    flexDirection: "row",
    backgroundColor: "rgba(40, 167, 69, 0.25)",
    justifyContent: "center",
    width: "80%",
    padding: 10,
    position: "absolute",
    top: 10,
    zIndex: 1,
    borderRadius: 15,
  },
  successText: {
    fontWeight: "bold",
    color: "#28A745",
  },
  warningBox: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 193, 7, 0.25)",
    justifyContent: "center",
    width: "80%",
    padding: 10,
    position: "absolute",
    top: 10,
    zIndex: 1,
    borderRadius: 15,
  },
  warningText: {
    fontWeight: "bold",
    color: "#FFC107",
  },
  dangerBox: {
    flexDirection: "row",
    backgroundColor: "rgba(220, 53, 69, 0.25)",
    justifyContent: "center",
    width: "80%",
    padding: 10,
    position: "absolute",
    alignSelf: "center",
    top: 10,
    zIndex: 1,
    borderRadius: 15,
  },
  dangerText: {
    fontWeight: "bold",
    color: "#DC3545",
  },
});
