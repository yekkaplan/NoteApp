/* eslint-disable no-unused-vars */
import SQLite from 'react-native-sqlite-storage';

/**
 * This class sqlite base class
 */
export default class BaseManager {
  /**
   * inital constructor for sqlite object
   */
  constructor() {
    this.sqlite = SQLite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
    this.sqlite
      .openDatabase({
        name: 'notes',
        location: 'default',
      })
      .then(db => {
        this.dbInstance = db;
        this.dbInstance
          .executeSql(
            'CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(500) , note VARCHAR(500), date VARCHAR(100))',
          )
          .then(val => {})
          .catch(err => {
            console.log(err);
            // eslint-disable-next-line no-undef
            reject(false);
          });
      });
  }

  /**
   *
   * @returns create table
   */
  createTable() {
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(
          'CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(500) , note VARCHAR(500), date VARCHAR(100))',
        )
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          console.log(err);
          reject(false);
        });
    });
  }

  /**
   *
   * @param {Object} payload - its note object
   * @returns boolean
   */
  editNote(payload) {
    new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(
          'UPDATE note set title=(?), note=(?) , date=(?) where id=(?)',
          [payload.title, payload.note, payload.date, payload.id],
          (sqlTxn, res) => {
            console.log('${payload} update sucess!');
          },
          error => {
            console.log('error update note!' + error.message);
          },
        )
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          reject(false);
        });
    });
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql('SELECT * FROM note')
        .then(([values]) => {
          var array = [];
          for (let index = 0; index < values.rows.length; index++) {
            const element = values.rows.item(index);
            array.push(element);
          }
          resolve(array);
        })
        .catch(err => {
          reject(false);
        });
    });
  }

  /**
   *
   * @param {Object} payload - new note object
   * @returns boolean
   */
  addTable(payload) {
    new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(
          'INSERT INTO note (title,note,date) VALUES (?,?,?)',
          [payload.title, payload.note, payload.date],
          (sqlTxn, res) => {},
          error => {},
        )
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          reject(false);
        });
    });
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql('SELECT * FROM note')
        .then(([values]) => {
          var array = [];
          for (let index = 0; index < values.rows.length; index++) {
            const element = values.rows.item(index);
            array.push(element);
          }
          resolve(array);
        })
        .catch(err => {
          reject(false);
        });
    });
  }

  /**
   *
   * @param {Object} payload -  deleted object
   * @returns boolean
   */
  deleteTable(payload) {
    new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(
          'Delete from note where id = (?)',
          [payload],
          (sqlTxn, res) => {},
          error => {},
        )
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          reject(false);
        });
    });
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql('SELECT * FROM note')
        .then(([values]) => {
          var array = [];
          for (let index = 0; index < values.rows.length; index++) {
            const element = values.rows.item(index);
            array.push(element);
          }
          resolve(array);
        })
        .catch(err => {
          reject(false);
        });
    });
  }

  /**
   *
   * @returns list of notes
   */
  getTable() {
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql('SELECT * FROM note')
        .then(([values]) => {
          var array = [];
          for (let index = 0; index < values.rows.length; index++) {
            const element = values.rows.item(index);
            array.push(element);
          }
          resolve(array);
        })
        .catch(err => {
          reject(false);
        });
    });
  }
}
