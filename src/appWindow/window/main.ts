import { BrowserWindow, globalShortcut, app, screen, shell, protocol, BrowserWindowConstructorOptions } from "electron";
import debounce from "lodash/debounce";
import EventEmitter from "events";

import { WINDOW_WIDTH, MAX_WINDOW_HEIGHT } from "@appWindow/constants/ui";

import buildMenu from "@appWindow/windowElements/menu";
import toggleWindow from "@appWindow/lib/toggleWindow";
import config from "@appWindow/lib/config";
import getWindowPosition from "@appWindow/lib/getWindowPosition";
import Logger from "@appWindow/lib/logger";

const logger = new Logger("MainCreateWindow");

export default ({ src }) => {
  const [x, y] = getWindowPosition({});
  //const { width, height } = screen.getPrimaryDisplay().workAreaSize

  const iconSrc = () => {
    switch (process.platform) {
      case "darwin":
        return `${__dirname}/resources/icon.ico`;
      case "win32":
        return `${__dirname}/resources/icon-white.ico`;
      default:
        return `${__dirname}/resources/icon.ico`;
    }
  };

  const browserWindowOptions : BrowserWindowConstructorOptions = {
    width: WINDOW_WIDTH,
    minWidth: WINDOW_WIDTH,
    height: MAX_WINDOW_HEIGHT,
    x,
    y,
    frame: false,
    resizable: false,
    hasShadow: false,
    // Show main window on launch only when application started for the first time
    show: true,
    transparent: true,
    maximizable: false,
    titleBarStyle: "customButtonsOnHover",
    minimizable: false,
    closable: false,
    icon: iconSrc(),
    webPreferences: {
      plugins: true,
      nodeIntegration: true
    }
  };

  const mainWindow = new BrowserWindow(browserWindowOptions);

  mainWindow.loadURL(src);

  mainWindow["settingsChanges"] = new EventEmitter();
  mainWindow["canToggleOff"] = true;
  /**
   * Set quit function to the window
   */
  mainWindow["quit"] = () => quitApplication();

  // Function to toggle main window
  const toggleMainWindow = () => toggleWindow(mainWindow);

  // Function to show main window
  const showMainWindow = () => {
    mainWindow && mainWindow.show();
    mainWindow && mainWindow.focus();
  };

  /**
   * Quit the application
   */
  const quitApplication = () =>{
    mainWindow.closable = true;
    app.quit();
  }

  mainWindow.on("close", () => {
    app.quit();
  });

  mainWindow.webContents.on("new-window", (event, url) => {
    shell.openExternal(url);
    event.preventDefault();
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (url !== mainWindow.webContents.getURL()) {
      shell.openExternal(url);
      event.preventDefault();
    }
  });

  // Change global hotkey if it is changed in app settings
  mainWindow["settingsChanges"].on("hotkey", value => {
    const currentShortcut = config.get("hotkey");
    globalShortcut.unregister(currentShortcut);
    config.set("hotkey", value);
    globalShortcut.register(value, toggleMainWindow);
  });

  // Once window finish load the dom, display as required
  mainWindow.webContents.on("did-finish-load", () => {
    logger.info("Main window contents did finish load");
    if (config.get("firstStart")) {
      showMainWindow();
      // Save in config information, that application has been started
      config.set("firstStart", false);
    }
  });
  
  // Handle window.hide: if cleanOnHide value in preferences is true
  // we clear all results and show empty window every time
  const resetResults = () => {
    mainWindow.webContents.send("message", {
      message: "showTerm",
      payload: ""
    });
  };

  // Handle change of cleanOnHide value in settins
  const handleCleanOnHideChange = value => {
    if (value) {
      mainWindow.on("hide", resetResults);
    } else {
      mainWindow.removeListener("hide", resetResults);
    }
  };

  // Set or remove handler when settings changed
  mainWindow["settingsChanges"].on("cleanOnHide", handleCleanOnHideChange);

  // Set initial handler if it is needed
  //We don't want to clean the screen on hide at the moment
  handleCleanOnHideChange(false /*config.get('cleanOnHide')*/);

  // Restore focus in previous application
  // MacOS only: https://github.com/electron/electron/blob/master/docs/api/app.md#apphide-macos
  if (process.platform === "darwin") {
    /*mainWindow.on('hide', () => {
      app.hide()
    })*/
  }

  app.on("activate", showMainWindow);

  buildMenu(mainWindow);
  return mainWindow;
};
