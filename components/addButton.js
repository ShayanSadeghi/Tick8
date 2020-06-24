import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { GlobalStyles } from "../styles/global";

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity style={GlobalStyles.addBtn} onPress={onPress}>
      <Entypo name="plus" size={48} style={GlobalStyles.addBtnContent} />
    </TouchableOpacity>
  );
}
