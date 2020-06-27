import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

import { DbRemoveData } from "../actions/dbActions";

export default function CardInfo({ navigation }) {
  const itemData = navigation.state.params;
  const progressLength = (8 - itemData.remainDays) / 10;
  const [answerText, setAnswerText] = useState("Press to show the answer");

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
          <Text style={styles.infoExample}>{itemData.cardEx}</Text>
        </View>
        <TouchableOpacity
          style={styles.infoTextContainer}
          onPress={() => setAnswerText(itemData.cardA)}>
          <Text style={styles.infoAnswer}>{answerText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={removeHandler}>
          <AntDesign name="delete" color="#FF8A5C" size={24} />
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
  icon: {
    position: "absolute",
    bottom: 15,
    left: 15,
  },
});
