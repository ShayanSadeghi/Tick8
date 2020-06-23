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

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
