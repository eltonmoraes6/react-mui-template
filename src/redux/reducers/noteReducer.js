import {
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
} from '../constants/noteConstants';

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_REQUEST:
      return { loading: true, notes: [] };
    case NOTE_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTE_LIST_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
