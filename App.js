import React from "react";

import Navigator from "./routes/drawer";

import { DbCreate } from "./actions/dbActions";

export default function App() {
  DbCreate();
  return <Navigator />;
}
