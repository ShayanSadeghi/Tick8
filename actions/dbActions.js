import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("UserDatabase");

//Create Db if it's not exist
export const DbCreate = () => {
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
          (tx, res) => {}
        );
      }
    }
  );
};

//Add a new card to database
export const DbSetNewCard = values => {
  db.exec(
    [
      {
        sql:
          "INSERT INTO tblUserCards (cardQ,cardA,cardEx,remainDays) VALUES (?,?,?,?)",
        args: [values.question, values.answer, values.example, 8],
      },
    ],
    false,
    (tx, res) => {}
  );
};

//Update card
export const DbUpdateCard = (ans, item) => {
  if (ans) {
    db.exec(
      [
        {
          sql: "UPDATE tblUserCards SET remainDays=(?) WHERE key=(?)",
          args: [item.remainDays - 1, item.key],
        },
      ],
      false,
      (tx, res) => {}
    );
  } else {
    db.exec(
      [
        {
          sql: "UPDATE tblUserCards SET remainDays=(?) WHERE key=(?)",
          args: [item.remainDays + 1, item.key],
        },
      ],
      false,
      (tx, res) => {}
    );
  }
};

//Delete Table
export const DbRemoveData = (key = null) => {
  if (key == null) {
    db.exec(
      [
        {
          sql: "DELETE FROM tblUserCards",
          args: [],
        },
      ],
      false,
      (tx, res) => {}
    );
  } else {
    db.exec(
      [
        {
          sql: "DELETE FROM tblUserCards WHERE key=(?)",
          args: [key],
        },
      ],
      false,
      (tx, res) => {}
    );
  }
};
// Get all cards data from database ....
