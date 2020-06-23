import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import SettingsStack from "./settingsStack";

const screens = {
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Settings: {
    screen: SettingsStack,
  },
};

const Navigator = createDrawerNavigator(screens);

export default createAppContainer(Navigator);
