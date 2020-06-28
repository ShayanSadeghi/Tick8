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
import { DbUpdateCard, DbResetCard } from "../actions/dbActions";
import CircleButton from "../shared/circleButton";

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
  const [loading, setLoading] = useState(true);

  const getData = () => {
    setLoading(true);
    db.exec(
      [
        {
          sql: "select * from tblUserCards WHERE remainDays=(?)",
          args: [0],
        },
      ],
      true,
      (tx, res) => {
        setCards(res[0].rows);

        setLoading(false);
      }
    );
  };

  const answerHandler = (ans, item) => {
    DbUpdateCard(ans, item);
    getData();
  };
  const resetHandler = item => {
    DbResetCard(item);
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
      <FlatList
        data={cards}
        keyExtractor={item => item.key.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={GlobalStyles.card}>
            <Card
              data={item}
              answerHandler={answerHandler}
              resetHandler={resetHandler}
            />
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
    </View>
  );
}

const styles = StyleSheet.create({
  refreshButtonContainer: {
    position: "absolute",
    bottom: 5,
    left: 5,
  },
});
