import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { GlobalStyles } from "../styles/global";

import CardForm from "../components/cardForm";

export default function CardModal({ visible, setModalOpen }) {
  const addCard = values => {
    console.log("Added");
    setModalOpen(false);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.modalContainer}>
          <CardForm addCard={addCard} />
          <TouchableOpacity style={GlobalStyles.modalButtonClose}>
            <Text onPress={() => setModalOpen(false)}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.modalButtonAdd}>
            <Text onPress={addCard}>Add</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
