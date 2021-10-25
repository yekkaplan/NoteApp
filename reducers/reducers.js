import {act} from 'react-test-renderer';
import {
  ADD_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  EDIT_NOTE,
} from '../constants/app-constants';
import {addNoteInDb, getNotes, deleteNote} from '../service/db';

const INITIAL_STATE = {
  selectedNote: [],
  notes: getNotes(),
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      addNoteInDb(action.payload);
      var res = await getNotes();
      state.notes = res;
      return {...state};
    case GET_NOTES:
      var res = await getNotes();
      state.notes = res;
      return {...state};
    case DELETE_NOTE:
      deleteNote(action.payload);
      var res = await getNotes();
      state.notes = res;
      return {...state};
    case EDIT_NOTE:
      console.info(action.payload);
      const objIndex = state.notes.findIndex(
        obj => obj.id === action.payload.id,
      );
      const updateObj = {
        ...state.notes[objIndex],
        title: action.payload.title,
        note: action.payload.note,
      };
      const newNotes = [
        ...state.notes.slice(0, objIndex),
        updateObj,
        ...state.notes.slice(objIndex + 1),
      ];
      state.notes = newNotes;

      return {...state};
    default:
      return state;
  }
};

export default reducer;
