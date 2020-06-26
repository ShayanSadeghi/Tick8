import React from "react";
import * as SQLite from "expo-sqlite";

import Navigator from "./routes/drawer";

export default function App() {
  const db = SQLite.openDatabase("UserDatabase");
  db.exec(
    [
      {
        sql:
          "SELECT name FROM sqlite_master WHERE type='table' AND name='tblUserCards'",
        args: [],
      },
    ],
    false,
    (tx, res) => {
      // console.log("Db count:", res[0].rows.length);
      if (res[0].rows.length === 0) {
        db.exec(
          [
            {
              sql:
                "CREATE TABLE tblUserCards(key INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, cardQ VARCHAR(20), cardA VARCHAR(40),cardEx VARCHAR(255), remainDays INTEGER)",
              args: [],
            },
          ],
          false,
          (tx, res) => {
            console.log(res);
          }
        );
      }
    }
  );

  return <Navigator />;
}
