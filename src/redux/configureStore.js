import { combineReducers, createStore } from "redux";
import { messReducer } from "./redusers/messReducer/messReducer";
import { chatReducer } from "./redusers/chatReducer/chatsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  combineReducers({
    mess: messReducer,
    chats: chatReducer,
  }),
  composeWithDevTools()
);
