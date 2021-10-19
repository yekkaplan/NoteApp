import {act} from 'react-test-renderer';
import {
  ADD_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  EDIT_NOTE,
} from '../constants/app-constants';

const INITIAL_STATE = {
  selectedNote: [],
  notes: [
    {
      id: 1,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 2,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 3,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 4,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 5,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 6,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 7,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 8,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
    {
      id: 9,
      title: 'Lorem',
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      date: '06.10.2021',
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      state.notes.push(action.payload);
      return {...state};
    case GET_NOTES:
      return;
    case DELETE_NOTE:
      return;
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
