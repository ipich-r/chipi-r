import { app, ipcMain, crashReporter, globalShortcut, protocol, shell } from "electron";
import fs from "fs";
import searchWindow from "./window/main";
import { isDev, USER_DATA, CHIPI_WEB_CLIENT, AWS_COGNITO, CHIPI_PROTOCOL } from "Environment";
import Logger from "@appWindow/lib/logger";
import config from "@appWindow/lib/config";
import toggleWindow from "@appWindow/lib/toggleWindow";
import autoStart from "@appWindow/lib/autoStart";
import AppTray from "@appWindow/windowElements/AppTray";
import handleUrl from "@appWindow/lib/handleUrl";
import qs from "querystring";

/*
import createBackgroundWindow from "./background/createWindow";
import createFeedbackWindow from "./main/windows/feedback/createWindow";
import initAutoUpdater from "./initAutoUpdater";
*/

// Ensure user data directory exists before we access it
// This prevents the race condition on app start for fresh installations
if (!fs.existsSync(USER_DATA)) {
  fs.mkdirSync(USER_DATA);
}

const logger = new Logger("mainProcess");
const trayIconSrc = (() => {
  switch (process.platform) {
    case "darwin":
      return `${__dirname}/resources/tray_iconTemplate@2x.png`;
    case "win32":
      return `${__dirname}/resources/tray_icon.ico`;
    default:
      return `${__dirname}/resources/tray_icon.png`;
  }
})();

//Remove the config file when app start for dev environment
if (isDev()) {
  config.remove();
}

const firstPageSrc = `file://${__dirname}/../app/index.html`;

require("electron-debug")({ showDevTools: false });

let mainWindow;
let backgroundWindow;
let feedbackWindow;

let tray;

const handleUrlFromArgv = argv => {
  logger.info("Make single instnace call back", { argv });
  // Check if the second instance was attempting to launch a URL for our protocol client
  const url = argv.find(function(arg) {
    const protocolRegex = new RegExp(`${CHIPI_PROTOCOL}:\/\/`);
    return protocolRegex.test(arg);
  });

  if (url) {
    app.emit("open-url", null, url);
  }
};

const gotSingleLock = app.requestSingleInstanceLock();

if (!gotSingleLock) {
  app.quit();
}

// To help some OS limitation, we need to set the app user mode id same to the appId in the build secion within package file.
app.setAppUserModelId("io.chipi.desktop");

app.on("second-instance", (event, argv, cwd) => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }

    mainWindow.focus();

    // Protocol handler for win32
    // argv: An array of the second instance’s (command line / deep linked) arguments
    if (process.platform == "win32") {
      handleUrlFromArgv(argv);
    }
  } else {
    logger.warn("Trying to run the second app instance, going to quit");
    app.quit();
  }
});

const registerHotkey = () => {
  let hotkey = config.get("hotkey");
  logger.verbose("Setting hot key", hotkey);

  if (!hotkey) {
    // TODO: allow user to set custom hotkey
    hotkey = "Control+Space";
    config.set("hotkey", hotkey);
  }

  globalShortcut.register(hotkey, () => {
    toggleWindow(mainWindow);
  });
};

const registerOpenAtLogin = () => {
  logger.verbose("Setting auto start while app begin", config.get("openAtLogin"));
  autoStart.set(config.get("openAtLogin"));
};

/**
 * Initate windows for the application
 */
const initiateWindows = () => {
  let mainWindowAppeared = false;

  // we need to recreate all the windows if the the windows were already created.

  if (mainWindow) {
    mainWindow.webContents.closeDevTools();
    mainWindow.destroy();
    mainWindowAppeared = true;
  }

  // Main window
  mainWindow = searchWindow({
    // Main window html
    src: firstPageSrc
  });

  if (mainWindowAppeared) {
    mainWindow.show();
  }

  if (tray) {
    tray.destroy();
  }

  tray = new AppTray({
    src: trayIconSrc,
    isDev: isDev(),
    mainWindow,
    feedbackWindow
  });

  tray.show();

  // Load and register user hotkey from config
  registerHotkey();

  mainWindow.show();

};

app.setAsDefaultProtocolClient(CHIPI_PROTOCOL, process.execPath, ["--"]);

if (app.dock) {
  app.dock.hide();
}

/**
 * The main logic to create windows
 */
app.on("ready", () => {
  initiateWindows();

  // Register open at login config
  registerOpenAtLogin();

  // Unregister and free hotkey for other apps to use, when closing Chipi.
  app.on("will-quit", () => {
    // Unregister all shortcuts.
    globalShortcut.unregisterAll();
  });

  // Show main window when user opens application, but it is already opened
  app.on("open-url", (event, path) => handleUrl(mainWindow, backgroundWindow, path));

  if (process.platform == "win32") {
    handleUrlFromArgv(process.argv);
  }
});

// Message floating between Main Window and Background Window
ipcMain.on("message", (event, payload) => {
  const toWindow = event.sender === mainWindow.webContents ? backgroundWindow : mainWindow;
  toWindow.webContents.send("message", payload);
});

ipcMain.on("reloadWindows", () => {
  initiateWindows();
});

ipcMain.on("updateSettings", (event, key, value) => {
  logger.info("updateSettings called", { event, key, value });

  mainWindow.settingsChanges.emit(key, value);

  // Show or hide menu bar icon when it is changed in setting
  if (key === "showInTray") {
    value ? tray.show() : tray.hide();
  }

  // Show or hide "development" section in tray menu
  if (key === "developerMode") {
    tray.setIsDev(isDev());
  }

  if (key === "openAtLogin") {
    config.set("openAtLogin", value);
    autoStart.set(value);
  }

  if (key === "hotkey") {
    const currentShortcut = config.get("hotkey");
    config.set("hotkey", value);
    registerHotkey();
  }
});
