import {
  ADD_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  EDIT_NOTE,
} from '../constants/app-constants';

const INITIAL_STATE = {
  selectedNote: [],
  notes: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {...state, notes: action.payload};
    case GET_NOTES:
      return {...state, notes: action.payload};
    case DELETE_NOTE:
      return {...state, notes: action.payload};
    case EDIT_NOTE:
      return {...state, notes: action.payload};
    default:
      return state;
  }
};

export default reducer;
