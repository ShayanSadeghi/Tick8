import { createStackNavigator } from "react-navigation-stack";

import Home from "../containers/Home";
import CardInfo from "../containers/CardInfo";

import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Header title="Tick-8" />,
    },
  },
  CardInfo: {
    screen: CardInfo,
    navigationOptions: {
      title: "Card",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#FF8A5C",
    headerStyle: {
      backgroundColor: "#49BEB7",
    },
  },
});

export default HomeStack;
