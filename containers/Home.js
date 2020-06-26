import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

import Card from "../components/card";
import AddButton from "../components/addButton";
import CardModal from "../containers/cardModal";
import { DbSetNewCard, DbUpdateCard } from "../actions/dbActions";

import { GlobalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const db = SQLite.openDatabase("UserDatabase");
  const [cards, setCards] = useState([
    {
      key: 0,
      cardQ: "Hello and Welcome",
      cardA: "",
      cardEx: "",
      remainDays: 4,
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const getData = () => {
    db.exec(
      [
        {
          sql: "select * from tblUserCards",
          args: [],
        },
      ],
      true,
      (tx, res) => {
        res[0].rows.length !== 0 && setCards(res[0].rows);
      }
    );
  };

  const onCardPressed = item => {
    navigation.navigate("CardInfo", item);
  };

  const openNewForm = () => {
    setModalOpen(true);
  };

  const addCard = values => {
    DbSetNewCard(values);
    getData();
    setModalOpen(false);
  };

  const answerHandler = (ans, item) => {
    DbUpdateCard(ans, item);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <CardModal
        visible={modalOpen}
        setModalOpen={setModalOpen}
        addCard={addCard}
      />

      <FlatList
        data={cards}
        keyExtractor={item => item.key.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={GlobalStyles.card}
            onPress={() => onCardPressed(item)}>
            <Card data={item} answerHandler={answerHandler} />
          </TouchableOpacity>
        )}
      />

      <AddButton onPress={openNewForm} />
    </View>
  );
}
