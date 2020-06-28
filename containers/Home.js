import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as SQLite from "expo-sqlite";

import Card from "../components/card";
import AddButton from "../components/addButton";
import CardModal from "../containers/cardModal";
import { DbSetNewCard, DbUpdateCard } from "../actions/dbActions";

import { GlobalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const db = SQLite.openDatabase("DbTick8");
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
  const [loading, setLoading] = useState(true);

  const getData = () => {
    setLoading(true);
    db.exec(
      [
        {
          sql: "select * from tblUserCards",
          args: [],
        },
      ],
      true,
      (tx, res) => {
        (res[0].rows.length !== 0 && setCards(res[0].rows)) ||
          setLoading(false);
        setLoading(false);
      }
    );
  };

  const onCardPressed = item => {
    navigation.navigate("CardInfo", { ...item, getData: () => getData() });
  };

  const openNewForm = () => {
    setModalOpen(true);
  };

  const addCard = values => {
    DbSetNewCard(values);
    setLoading(true);
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

  if (loading) {
    return (
      <View style={GlobalStyles.container}>
        <ActivityIndicator size={50} color="#FF8A5C" />
      </View>
    );
  }
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
        renderItem={({ item }) =>
          item.remainDays > 0 && (
            <TouchableOpacity
              style={GlobalStyles.card}
              onPress={() => onCardPressed(item)}>
              <Card data={item} answerHandler={answerHandler} />
            </TouchableOpacity>
          )
        }
      />
      <View style={styles.addButtonContainer}>
        <AddButton onPress={openNewForm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  refreshButtonContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
});
