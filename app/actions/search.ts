import { shell, clipboard, remote, ipcRenderer } from "electron";
import Logger from "@appWindow/lib/logger";
import debounce from "lodash/debounce";
import { replace, push } from "connected-react-router";
import uuid from "uuid/v4";
import config from "@appWindow/lib/config"

import store from "../store";
import { UPDATE_TERM } from "@app/store/search/types";

const logger = new Logger("actionsSearch");



/**
 * Dispatch the UPDATE_TERM event
 * @param {String} term
 */
export const updateTerm = (term) => {
  logger.verbose("Update term properties", { term });

  return dispatch => {
    dispatch({
      type: UPDATE_TERM,
      payload: term
    });
  };
};