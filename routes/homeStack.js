import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../containers/Home";
import CardInfo from "../containers/CardInfo";

const screens = {
  Home: {
    screen: Home,
  },
  CardInfo: {
    screen: CardInfo,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    title: "Tick-8",
    headerTintColor: "#FF8A5C",
    headerStyle: {
      backgroundColor: "#49BEB7",
    },
  },
});

export default createAppContainer(HomeStack);
