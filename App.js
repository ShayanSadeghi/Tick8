import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Navigator from "./routes/drawer";

import { DbCreate } from "./actions/dbActions";

const getFonts = () =>
  Font.loadAsync({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    "LatoBold": require("./assets/fonts/Lato-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  DbCreate();
  if (fontLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
