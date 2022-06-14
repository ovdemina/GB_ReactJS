import {
  errorAction,
  loadUserAction,
  loadingAction,
} from "../../actions/actions";
import { ERROR, LOADING, LOAD_USERS } from "../../actions/actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case LOAD_USERS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const loadUsers = () => {
  return async (dispatch) => {
    dispatch(loadingAction());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      dispatch(loadUserAction(json));
    } catch (e) {
      dispatch(errorAction(e));
    }
  };
};
