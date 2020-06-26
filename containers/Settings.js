import React from "react";
import { View } from "react-native";

import Tick8Button from "../shared/tick8Button";
import { GlobalStyles } from "../styles/global";

import { DbDropTable } from "../actions/dbActions";

export default function Settings({ navigation }) {
  const deleteHandler = () => {
    DbDropTable();
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
