import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as SQLite from "expo-sqlite";

import Card from "../components/card";
import CircleButton from "../shared/circleButton";
import CardModal from "../containers/cardModal";
import ActionStatus from "../shared/actionStatus";
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
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const getData = () => {
    setLoading(true);
    db.exec(
      [
        {
          sql: "select * from tblUserCards WHERE remainDays>(?)",
          args: [0],
        },
      ],
      true,
      (tx, res) => {
        if (res[0].rows.length !== 0) {
          setCards(res[0].rows);
        } else {
          setCards(null);
        }
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
    if (ans) {
      setPopup({ show: true, message: "Very Good :)", type: "success" });
    } else {
      setPopup({
        show: true,
        message: "Try harder :(",
        type: "warning",
      });
    }
    setTimeout(() => {
      setPopup({
        show: false,
      });
    }, 2000);
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
      {popup.show && <ActionStatus popupData={popup} />}
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
      <View style={styles.refreshButtonContainer}>
        <CircleButton
          icon="refresh"
          onPress={getData}
          style={GlobalStyles.refreshBtn}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <CircleButton
          icon="add"
          onPress={openNewForm}
          style={GlobalStyles.addBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  refreshButtonContainer: {
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});
