import { ERROR, LOADING, LOAD_USERS } from "./actionTypes";

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
