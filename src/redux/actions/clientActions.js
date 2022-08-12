import api from '../../services/api';
import {
  CLIENT_LIST_FAIL,
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_REGISTER_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
} from '../constants/clientConstants';

export const getClientsData = (query) => async (dispatch, getState) => {
  try {
    let querySearch = '';

    if (query) {
      querySearch = `?${query}`;
    }

    dispatch({ type: CLIENT_LIST_REQUEST });

    const { data } = await api.get(`/clients${querySearch}`);
    if (data) {
      dispatch({
        type: CLIENT_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: CLIENT_LIST_FAIL,
      payload: error,
    });
  }
};

export const addClient =
  (name, familyName, fullName, gender, address) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CLIENT_REGISTER_REQUEST });

      const body = JSON.stringify({
        name,
        familyName,
        fullName,
        gender,
        address,
      });

      const { data } = await api.post('/clients', body);

      dispatch({
        type: CLIENT_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_REGISTER_FAIL,
        payload: error,
      });
    }
  };
