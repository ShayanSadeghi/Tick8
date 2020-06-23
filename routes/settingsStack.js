import { createStackNavigator } from "react-navigation-stack";

import Settings from "../containers/Settings";

const screens = {
  settings: {
    screen: Settings,
  },
};

const SettingsStack = createStackNavigator(screens);

export default SettingsStack;
