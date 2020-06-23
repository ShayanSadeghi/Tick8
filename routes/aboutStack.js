import { createStackNavigator } from "react-navigation-stack";

import About from "../containers/About";

const screens = {
  about: {
    screen: About,
  },
};

const AboutStack = createStackNavigator(screens);

export default AboutStack;
