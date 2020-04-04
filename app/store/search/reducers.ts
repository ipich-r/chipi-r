/* eslint no-shadow: [2, { "allow": ["comments"] }] */
import Logger from "@appWindow/lib/logger";
import { ISearchState, ISearchActionTypes, RESET } from "./types";

import {
  UPDATE_TERM,
} from "./types";

const logger = new Logger("reducer.search");
const initialState: ISearchState = {
  // Search term in main input
  term: "",
  // Index of selected output item
  searchingInFlight: false,
  searchId: "",
  // Force to trigger search
  autoSearch: false,
  autocomplete: null, // { value, startIndex, matchTerm}
  error: null
};

export function searchReducer(
  state: ISearchState = JSON.parse(JSON.stringify(initialState)),
  action: ISearchActionTypes
): ISearchState {
  switch (action.type) {
    case UPDATE_TERM: {

      return {
        ...state,
        autoSearch: false,
        term: action.payload,
        searchingInFlight: false,
        autocomplete: null
      };
    }
    case RESET: {
      return {
        // Do not override last used search term with empty string
        ...state,
        term: "",
        searchId: "",
        searchingInFlight: false,
        autoSearch: true, // Prevent async results from being shown after clearing,
        autocomplete: null
      };
    }
    default:
      return state;
  }
}
