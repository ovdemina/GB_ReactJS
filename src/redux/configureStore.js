import { combineReducers, createStore } from "redux";
import { messReducer } from "./redusers/messReducer/messReducer";
import { chatReducer } from "./redusers/chatReducer/chatsReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./redusers/userReducer/userReducer";
import { regUserReducer } from "./redusers/regUserReducer/regUserReducer";

// const time = (store) => (next) => (action) => {
//   const delay = action?.meta?.delay;
//   if (!delay) {
//     return next(action);
//   }

//   const timeOut = setTimeout(() => next(action), delay);

//   return () => {
//     clearTimeout(timeOut);
//   };
// };

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mess: messReducer,
  chats: chatReducer,
  users: userReducer,
  regUsers: regUserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persist = persistStore(store);
