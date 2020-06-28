import { createStackNavigator } from "react-navigation-stack";

import Completed from "../containers/Completed";
import Header from "../shared/header";
import React from "react";

const screens = {
  Completed: {
    screen: Completed,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="Completed Cards" navigation={navigation} />
        ),
      };
    },
  },
};

const CompletedStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#FF8A5C",
    headerStyle: {
      backgroundColor: "#49BEB7",
    },
  },
});

export default CompletedStack;
