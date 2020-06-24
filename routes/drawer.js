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

const Navigator = createDrawerNavigator(screens, {
  drawerBackgroundColor: "#FF8A5C",
});

export default createAppContainer(Navigator);
