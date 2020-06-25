import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as SQLite from "expo-sqlite";

import Card from "../components/card";
import AddButton from "../components/addButton";
import CardModal from "../containers/cardModal";

import { GlobalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const db = SQLite.openDatabase("UserDatabase");
  const [cards, setCards] = useState([
    {
      cardQ: "Hello and Welcome",
      cardA: "",
      cardEx: "",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const onCardPressed = () => {
    navigation.navigate("CardInfo");
  };

  const openNewForm = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    db.exec(
      [
        {
          sql: "select * from tblUserCards",
          args: [],
        },
      ],
      true,
      (tx, res) => {
        setCards(res[0].rows);
        console.log("IN TABLE:", res[0].rows);
      }
    );
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <CardModal visible={modalOpen} setModalOpen={setModalOpen} />

      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={GlobalStyles.card}
            onPress={() => onCardPressed()}>
            <Card data={item} />
          </TouchableOpacity>
        )}
      />

      <AddButton onPress={openNewForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    alignSelf: "center",
    backgroundColor: "red",
  },
});
