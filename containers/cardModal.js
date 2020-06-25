import React from "react";
import { View, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import * as SQLite from "expo-sqlite";

import { GlobalStyles } from "../styles/global";

import CardForm from "../components/cardForm";

export default function CardModal({ visible, setModalOpen }) {
  const db = SQLite.openDatabase("UserDatabase");
  db.exec(
    [
      {
        sql:
          "SELECT name FROM sqlite_master Where type='table' AND name='tblUserCards'",
        args: [],
      },
    ],
    true,
    (tx, res) => {
      console.log(res);
    }
  );
  const addCard = values => {
    db.exec(
      [
        {
          sql: "INSERT INTO tblUserCards (cardQ,cardA,cardEx) VALUES (?,?,?)",
          args: [values.question, values.answer, values.example],
        },
      ],
      false,
      (tx, res) => {
        console.log("RES: ", res);
      }
    );
    // db.transaction(tx => {
    //   tx.executeSql(
    //     "INSERT INTO tblUserCards (question,answer,example) VALUES (?,?,?)",
    //     [values.question, values.answer, values.example],
    //     (tx, results) => {
    //       console.log("RESULTS: ", results.rowsAffected);
    //       if (results.rowsAffected > 0) {
    //         console.log("successfully added");
    //       } else {
    //         console.log("an error exist");
    //       }
    //     }
    //   );
    // });
    console.log(values.question);
    // console.log("Add");

    // setModalOpen(false);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.modalContainer}>
          <CardForm addCard={addCard} setModalOpen={setModalOpen} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
