import { DELETE_MESS } from "../../actions/actionTypes";
import { ADD_MESS } from "../../actions/actionTypes";

const initialState = {
  mess: [
    {
      id: 1,
      chatId: 1,
      title: "Hello",
    },
    {
      id: 2,
      chatId: 3,
      title: "Ok",
    },
    {
      id: 3,
      chatId: 2,
      title: "Hi",
    },
  ],
};

export const messReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MESS:
      return {
        ...state,
        mess: state.mess.filter((item) => item.id !== action.payload),
      };
    case ADD_MESS:
      return {
        ...state,
        mess: [...state.mess, action.payload],
      };

    default:
      return state;
  }
};
