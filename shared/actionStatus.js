import React, { useRef } from "react";
import { Animated, View, Text } from "react-native";

import { GlobalStyles } from "../styles/global";

const FadeInView = props => {
  let fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }, 1000);
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
      <View style={[GlobalStyles.popupBox, GlobalStyles[boxColor]]}>
        <Text style={[GlobalStyles.popupText, GlobalStyles[textColor]]}>
          {popupData.message}
        </Text>
      </View>
    </FadeInView>
  );
}
