import {
  LOAD_USERS,
  LOADING,
  ERROR,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "./actionTypes";
import { auth } from "../../firebase";

export const loadUserAction = (data) => ({
  type: LOAD_USERS,
  payload: data,
});

export const loadingAction = () => ({
  type: LOADING,
});

export const errorAction = (error) => ({
  type: ERROR,
  payload: error,
});

export const registerStart = () => ({
  type: REGISTER_START,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerError = (err) => ({
  type: REGISTER_ERROR,
  payload: err,
});

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginError = (err) => ({
  type: LOGIN_ERROR,
  payload: err,
});

export const logoutStart = () => ({
  type: LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutError = () => ({
  type: LOGOUT_ERROR,
});

export const registerInitiate = (email, password, displayName) => {
  return (dispatch) => {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((err) => dispatch(registerError(err.message)));
  };
};

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((e) => dispatch(loginError(e.message)));
  };
};

export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .catch((e) => dispatch(logoutError(e.message)));
  };
};
