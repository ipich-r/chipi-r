import { connectRouter } from "connected-react-router";

import { searchReducer } from "./search/reducers";

import { combineReducers } from "redux";
import { History } from "history";

export const createRootReducer = (history: History<any>) =>
  combineReducers({
    search: searchReducer,
    router: connectRouter(history)
  });
