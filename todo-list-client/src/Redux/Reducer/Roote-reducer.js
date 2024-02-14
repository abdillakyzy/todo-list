import { combineReducers } from "redux";
import { AuthReducer } from "./Auth-reduser";
import { TodoReducer } from "./Todo-reducer";

export const rootReducer = combineReducers({
  AuthReducer,
  TodoReducer,
});
