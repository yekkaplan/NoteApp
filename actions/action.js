import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTES,
} from '../constants/app-constants';

export const addNote = note => dispatch => {
  dispatch({type: ADD_NOTE, payload: note});
};
export const editNote = note => dispatch => {
  dispatch({type: EDIT_NOTE, payload: note});
};
