import React from "react";
import { View, Text } from "react-native";

import { GlobalStyles } from "../styles/global";

export default function Header() {
  return (
    <View style={GlobalStyles.header}>
      <Text>Tick-8</Text>
    </View>
  );
}
