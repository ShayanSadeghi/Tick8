import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import SettingsStack from "./settingsStack";
import CompletedStack from "./completedStack";

const screens = {
  Home: {
    screen: HomeStack,
  },
  "Completed Cards": {
    screen: CompletedStack,
  },
  Settings: {
    screen: SettingsStack,
  },
  About: {
    screen: AboutStack,
  },
};

const Navigator = createDrawerNavigator(screens, {
  drawerBackgroundColor: "#FF8A5C",
});

export default createAppContainer(Navigator);
