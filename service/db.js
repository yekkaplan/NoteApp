import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'note_db',
});

const addNoteInDb = payload => {
  db.transaction(txn => {
    txn.executeSql(
      'INSERT INTO notes (title,note,date) VALUES (?,?,?)',
      [payload.title, payload.note, payload.date],
      (sqlTxn, res) => {
        console.log('${payload} added sucess!');

        console.info(payload.title);
      },
      error => {
        console.log('error adding note!' + error.message);
      },
    );
  });
};

const getNotes = payload => {
  let temp = [];
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM notes', [], (tx, results) => {
      for (let i = 0; i < results.rows.length; ++i) {
        temp.push(results.rows.item(i));
      }
      return temp;
    });
  });

  return temp;
};

const deleteNote = payload => {
  let isDelete = false;

  console.info(payload);
  db.transaction(tx => {
    tx.executeSql(
      'DELETE from notes where id = ? ',
      [payload.id],
      (tx, results) => {
        isDelete = true;
      },
      error => {
        isDelete = false;
        console.info(error.message);
      },
    );
  });
  return isDelete;
};

export {addNoteInDb, getNotes, deleteNote};
