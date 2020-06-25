import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as Progress from "react-native-progress";

import { GlobalStyles } from "../styles/global";

export default function CardInfo() {
  return (
    <ScrollView style={styles.infoContainer}>
      <View style={styles.infoCard}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoQuestion}> Card Info</Text>
        </View>
        <Progress.Bar
          progress={0.8}
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
            {" "}
            Some text for example or description can be here Some text for
          </Text>
        </View>
        <TouchableOpacity style={styles.infoTextContainer}>
          <Text style={styles.infoAnswer}> Press to show the answer</Text>
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
});
