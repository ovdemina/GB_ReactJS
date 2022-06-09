import { combineReducers, createStore } from "redux";
import { messReducer } from "./redusers/messReducer/messReducer";
import { chatReducer } from "./redusers/chatReducer/chatsReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware } from "redux";

const time = (store) => (next) => (action) => {
  const delay = action?.meta?.delay;
  if (!delay) {
    return next(action);
  }

  const timeOut = setTimeout(() => next(action), delay);

  return () => {
    clearTimeout(timeOut);
  };
};

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mess: messReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(time));
export const persist = persistStore(store);
