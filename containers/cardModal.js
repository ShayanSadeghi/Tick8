import React from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";

import { GlobalStyles } from "../styles/global";

import CardForm from "../components/cardForm";

export default function CardModal({ visible, setModalOpen }) {
  const addCard = values => {
    console.log("Added");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={GlobalStyles.modalContainer}>
        <CardForm addCard={addCard} />
        <TouchableOpacity style={GlobalStyles.modalButtonClose}>
          <Text onPress={() => setModalOpen(false)}>Close Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.modalButtonAdd}>
          <Text onPress={addCard}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
