import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTES,
} from '../constants/app-constants';
import BaseManager from '../service/base_manager';

var manager = new BaseManager();

export const addNote = note => async dispatch => {
  var res = await manager.addTable(note);

  dispatch({type: ADD_NOTE, payload: res});
};
export const editNote = note => async dispatch => {
  var res = await manager.editNote(note);
  dispatch({type: EDIT_NOTE, payload: res});
};
export const getNote = () => async dispatch => {
  var result = await manager.getTable();

  console.info(result);
  dispatch({type: GET_NOTES, payload: result});
};

export const deleteNote = note => async dispatch => {
  console.info(note);
  var result = await manager.deleteTable(note.id);

  dispatch({type: DELETE_NOTE, payload: result});
};
