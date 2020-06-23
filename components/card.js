import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { GlobalStyles } from "../styles/global";

export default function Card() {
  return (
    <TouchableOpacity style={GlobalStyles.card}>
      <Text>Hi</Text>
    </TouchableOpacity>
  );
}
