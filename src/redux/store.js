import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { clientListReducer } from './reducers/clientListReducer';

import { noteListReducer } from './reducers/noteReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
  clientList: clientListReducer,
  noteList: noteListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem('accessToken')
  ? JSON.stringify(localStorage.getItem('accessToken'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
