import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ipcRenderer, shell } from "electron";

import { AppContainer } from "react-hot-loader";


import { on, send } from "@app/lib/rpc";

import config from "@appWindow/lib/config";
import store, { history } from "./store";
import "./css/global.css";
import Logger from "@appWindow/lib/logger";
import Routes from "@app/routes";

const logger = new Logger("app/main");

require("fix-path")();

/**
 * Change current theme
 *
 * @param  {String} src Absolute path to new theme css file
 */
const changeTheme = src => {
  document.getElementById("chipi-theme")["href"] = src;
};

// Set theme from config
changeTheme(config.get("theme"));

const rootContainer = document.getElementById("root");

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes history={history} /> {/* pass history object as props */}
    </Provider>
  </AppContainer>,
  rootContainer
);

rootContainer.classList.add(process.platform);

// Handle `updateTheme` rpc event and change current theme
on("updateTheme", changeTheme);

// Handle `reload` rpc event and reload window
on("reload", () => location.reload());





