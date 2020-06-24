import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

import Card from "../components/card";
import AddButton from "../components/addButton";
import CardModal from "../containers/cardModal";

import { GlobalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const onCardPressed = () => {
    navigation.navigate("CardInfo");
  };

  const openNewForm = () => {
    setModalOpen(true);
  };

  return (
    <View style={GlobalStyles.container}>
      <CardModal visible={modalOpen} setModalOpen={setModalOpen} />
      <TouchableOpacity
        style={GlobalStyles.card}
        onPress={() => onCardPressed()}>
        <Card />
      </TouchableOpacity>
      <AddButton onPress={openNewForm} />
    </View>
  );
}
