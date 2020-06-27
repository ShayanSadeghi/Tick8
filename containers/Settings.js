import React from "react";
import { View, Alert } from "react-native";

import Tick8Button from "../shared/tick8Button";
import { GlobalStyles } from "../styles/global";

import { DbRemoveData } from "../actions/dbActions";

export default function Settings({ navigation }) {
  console.log(navigation);
  const removeHandler = () => {
    DbRemoveData();
    navigation.navigate("Home");
  };
  const deleteHandler = () => {
    Alert.alert(
      "DELETE CARDS",
      "Are you sure to remove all of your cards history?",
      [{ text: "Yes", onPress: removeHandler }, { text: "Cancel" }],
      { cancelable: true }
    );
  };

  return (
    <View style={GlobalStyles.container}>
      <Tick8Button
        text="Delete All Cards"
        pressHandler={deleteHandler}
        icon="delete"
      />
    </View>
  );
}
