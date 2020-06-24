import { createStackNavigator } from "react-navigation-stack";

import Settings from "../containers/Settings";
import Header from "../shared/header";
import React from "react";

const screens = {
  settings: {
    screen: Settings,
    navigationOptions: {
      headerTitle: () => <Header title="Settings" />,
    },
  },
};

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#FF8A5C",
    headerStyle: {
      backgroundColor: "#49BEB7",
    },
  },
});

export default SettingsStack;
