import api from '../../services/api';
import LocalStorageService from '../../services/LocalStorageService';
import {
  SET_CURRENT_USER,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const body = JSON.stringify({ email, password });

    const { data } = await api.post('/users/login', body);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // localStorage.setItem('userInfo', JSON.stringify(data));
    // localStorage.setItem('accessToken', data.accessToken);
    // localStorage.setItem('refreshToken', data.refreshToken);

    LocalStorageService.setToken(data);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  await api.post('/users/logout');

  // localStorage.removeItem('userInfo');
  LocalStorageService.clearToken();
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register =
  (name, familyName, email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const body = JSON.stringify({
        name,
        familyName,
        email,
        password,
        confirmPassword,
      });

      const { data } = await api.post('/users/signup', body);

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      // const user = JSON.stringify(data);
      // localStorage.setItem('userInfo', JSON.stringify(data));
      // localStorage.setItem('access_token', user.accessToken);
      // localStorage.setItem('refresh_token', user.refreshToken);

      // localStorage.setItem('accessToken', data.accessToken);
      // localStorage.setItem('refreshToken', data.refreshToken);

      LocalStorageService.setToken(data);
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error,
      });
    }
  };

//Set Logged in User
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
