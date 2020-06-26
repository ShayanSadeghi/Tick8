import React from "react";
import { View } from "react-native";
import * as SQLite from "expo-sqlite";

import Tick8Button from "../shared/tick8Button";
import { GlobalStyles } from "../styles/global";

export default function Settings({ navigation }) {
  const db = SQLite.openDatabase("UserDatabase");
  const deleteHandler = () => {
    db.exec(
      [
        {
          sql: "DROP TABLE tblUserCards",
          args: [],
        },
      ],
      false,
      (tx, res) => {
        console.log(res);
      }
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
