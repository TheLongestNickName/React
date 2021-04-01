import { stopSubmit } from "redux-form";
import { authAPI } from "../components/API/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        

      };

    default:
      return state;
  }
};
export default authReducer;

export const setUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const setUsersDataThunk = () => {
  return (
    (dispatch) =>{
     return authAPI.statusMe()
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          dispatch(setUserData(id, email, login, true));
        }
      });
    }
  )
};

export const LoginThunk = (email, password, rememberMe) => {
  return (
    (dispatch) =>{
      authAPI.login(email, password, rememberMe )
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUsersDataThunk())
        }
        else {
          dispatch(stopSubmit('login', {_error:response.data.messages[0]}))
        }
      });
    }
  )
};

export const LogoutThunk = () => {
  return (
    (dispatch) =>{
      authAPI.logout()
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false));
        }
      });
    }
  )
};

