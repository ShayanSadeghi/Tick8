import React from "react";
import { View, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";

import { GlobalStyles } from "../styles/global";

import CardForm from "../components/cardForm";

export default function CardModal({ addCard, visible, setModalOpen }) {
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
