import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as SQLite from "expo-sqlite";

import { MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import ActionStatus from "../shared/actionStatus";

import { DbRemoveData, DbUpdateCard } from "../actions/dbActions";

import { GlobalStyles } from "../styles/global";

export default function CardInfo({ navigation }) {
  const db = SQLite.openDatabase("DbTick8");

  const [itemData, getItemData] = useState(navigation.state.params);
  console.log(itemData);
  const [progressLength, setProgressLength] = useState(
    (8 - itemData.remainDays) / 8
  );
  const [answerText, setAnswerText] = useState("Press to show the answer");
  const [isAnswerShow, setAnswerShow] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const showAnswer = () => {
    setAnswerText(itemData.cardA);
    setAnswerShow(true);
  };

  const removeAlert = () => {
    Alert.alert(
      "Remove Card",
      "Are you sure to remove this card?",
      [
        {
          text: "Yes!",
          onPress: () => removeHandler(),
        },
        { text: "No" },
      ],
      { cancelable: true }
    );
  };
  const removeHandler = () => {
    DbRemoveData(itemData.key);
    navigation.navigate("Home", {
      onGoBack: navigation.state.params.getData(),
    });
  };
  const setAnswer = (ans, item) => {
    const now = Date.now();
    if (item.lastEdit + 24 * 60 * 60 * 1000 > now && item.remainDays !== 8) {
      setPopup({
        show: true,
        message: "You should wait between each answer for 24 hour",
        type: "danger",
      });
    } else {
      DbUpdateCard(ans, item);
      getData();
      if (ans) {
        setPopup({ show: true, message: "Very Good :)", type: "success" });
        setProgressLength(progressLength + 1 / 8);
      } else {
        setPopup({
          show: true,
          message: "Try harder :(",
          type: "warning",
        });
        setProgressLength(progressLength - 1 / 8);
      }
    }

    setTimeout(() => {
      setPopup({
        show: false,
      });
    }, 2000);
  };

  //get card data for updates
  const getData = () => {
    db.exec(
      [
        {
          sql: "select * from tblUserCards WHERE key=(?)",
          args: [itemData.key],
        },
      ],
      true,
      (tx, res) => {
        getItemData(res[0].rows[0]);
      }
    );
  };
  return (
    <ScrollView style={styles.infoContainer}>
      <View style={styles.infoCard}>
        {popup.show && <ActionStatus popupData={popup} />}
        <View style={styles.infoTextContainer}>
          <Text style={GlobalStyles.boldText}>{itemData.cardQ}</Text>
        </View>
        <Progress.Bar
          progress={progressLength}
          width={300}
          color="#FF8A5C"
          unfilledColor="#EAEAEA"
          borderWidth={0}
          height={12}
          borderRadius={10}
          style={styles.progressBar}
        />
        <View style={styles.infoTextContainer}>
          <Text style={GlobalStyles.regularText}>
            {itemData.cardEx || "No example to show"}
          </Text>
        </View>
        <TouchableOpacity style={styles.infoTextContainer} onPress={showAnswer}>
          {!isAnswerShow && (
            <MaterialIcons
              style={styles.eyeIcon}
              name="remove-red-eye"
              size={24}
              color="#FF8A5C"
            />
          )}
          <Text style={[GlobalStyles.regularText, styles.infoAnswer]}>
            {answerText}
          </Text>
        </TouchableOpacity>

        <View style={styles.cardIcons}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setAnswer(false, itemData)}>
            <MaterialIcons
              style={styles.icon}
              name="close"
              size={30}
              color="#FCF9EA"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={removeAlert}>
            <MaterialIcons name="delete" color="#FCF9EA" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setAnswer(true, itemData)}>
            <MaterialIcons
              style={styles.icon}
              name="check"
              size={30}
              color="#FCF9EA"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    alignSelf: "center",
    marginTop: 30,
  },
  infoCard: {
    width: 336,
    minHeight: 350,
    borderRadius: 24,
    alignItems: "center",
    backgroundColor: "#BADFDB",
  },
  progressBar: {
    marginTop: 30,
  },
  infoTextContainer: {
    flexDirection: "row",
    width: 300,
    minHeight: 50,
    borderRadius: 10,
    marginTop: 30,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
  },
  infoAnswer: {
    color: "#00AC9A",
  },
  eyeIcon: {
    marginRight: 10,
  },
  cardIcons: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  iconContainer: {
    backgroundColor: "#FF8A5C",
    width: 30,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 40,
  },
});
