import api from '../../services/api';
import {
  NOTE_LIST_FAIL,
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_REGISTER_FAIL,
  NOTE_REGISTER_REQUEST,
  NOTE_REGISTER_SUCCESS,
} from '../constants/noteConstants';

export const addNotes = (title, text) => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTE_REGISTER_REQUEST });

    const body = JSON.stringify({
      title,
      text,
    });

    const { data } = await api.post('/notes', body);

    dispatch({
      type: NOTE_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTE_REGISTER_FAIL,
      payload: error,
    });
  }
};

export const getNotesData = (query) => async (dispatch, getState) => {
  try {
    let querySearch = '';

    if (query) {
      querySearch = `?${query}`;
    }

    dispatch({ type: NOTE_LIST_REQUEST });
    const { data } = await api.get(`/notes${querySearch}`);
    if (data) {
      dispatch({
        type: NOTE_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: NOTE_LIST_FAIL,
      payload: error,
    });
  }
};
