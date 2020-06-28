import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { GlobalStyles } from "../styles/global";

export default function CircleButton({ onPress, style, icon }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <MaterialIcons
        name={icon}
        size={48}
        style={GlobalStyles.circleBtnContent}
      />
    </TouchableOpacity>
  );
}
