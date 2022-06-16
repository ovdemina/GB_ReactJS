import {
  REGISTER_START,
  LOGOUT_START,
  LOGIN_START,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  LOGOUT_ERROR,
} from "../../actions/actionTypes";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const regUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
    case LOGOUT_START:
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
