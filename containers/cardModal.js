import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
} from "react-native";

import { GlobalStyles } from "../styles/global";

import CardForm from "../components/cardForm";

export default function CardModal({ visible, setModalOpen }) {
  const addCard = values => {
    console.log(values);
    console.log("Add");
    setModalOpen(false);
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
