import { createStackNavigator } from "react-navigation-stack";

import About from "../containers/About";
import Header from "../shared/header";
import React from "react";

const screens = {
  about: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="About" navigation={navigation} />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#FF8A5C",
    headerStyle: {
      backgroundColor: "#49BEB7",
    },
  },
});

export default AboutStack;
