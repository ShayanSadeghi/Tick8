import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

import { DbRemoveData } from "../actions/dbActions";

export default function CardInfo({ navigation }) {
  const itemData = navigation.state.params;
  const progressLength = (8 - itemData.remainDays) / 8;
  const [answerText, setAnswerText] = useState("Press to show the answer");
  const [isAnswerShow, setAnswerShow] = useState(false);

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

  return (
    <ScrollView style={styles.infoContainer}>
      <View style={styles.infoCard}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoQuestion}>{itemData.cardQ}</Text>
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
          <Text style={styles.infoExample}>
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
          <Text style={styles.infoAnswer}>{answerText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RemoveIcon} onPress={removeAlert}>
          <MaterialIcons name="delete" color="#FF8A5C" size={30} />
        </TouchableOpacity>
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
    paddingBottom: 30,
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
  infoQuestion: {
    fontWeight: "bold",
  },
  infoAnswer: {
    color: "#00AC9A",
  },
  eyeIcon: {
    marginRight: 10,
  },
  RemoveIcon: {
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: 10,
  },
});
