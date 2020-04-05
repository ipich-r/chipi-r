module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./appWindow/index.development.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/constants/ui.ts":
/*!*****************************!*\
  !*** ./app/constants/ui.ts ***!
  \*****************************/
/*! exports provided: INPUT_HEIGHT, RESULT_HEIGHT, ACTIONS_HEIGHT, CONTENT_VISIBLE_WIDTH, NO_FOUND_ITEMS_HEIGHT, STATUS_BAR_HEIGHT, WARNING_BAR_HEIGHT, MAX_RESULTS, MAX_VISIBLE_RESULTS, SUGGESTION_SECTION_HEIGHT, SUGGESTION_ITEM_HEIGHT, MAX_OUTPUT_HEIGHT, VERTICAL_PADDING, MAGIC_FILTER_HEIGHT, MAGIC_FILTER_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_HEIGHT", function() { return INPUT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT_HEIGHT", function() { return RESULT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS_HEIGHT", function() { return ACTIONS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_VISIBLE_WIDTH", function() { return CONTENT_VISIBLE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_FOUND_ITEMS_HEIGHT", function() { return NO_FOUND_ITEMS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_BAR_HEIGHT", function() { return STATUS_BAR_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WARNING_BAR_HEIGHT", function() { return WARNING_BAR_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_RESULTS", function() { return MAX_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_VISIBLE_RESULTS", function() { return MAX_VISIBLE_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTION_SECTION_HEIGHT", function() { return SUGGESTION_SECTION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTION_ITEM_HEIGHT", function() { return SUGGESTION_ITEM_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_OUTPUT_HEIGHT", function() { return MAX_OUTPUT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL_PADDING", function() { return VERTICAL_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_FILTER_HEIGHT", function() { return MAGIC_FILTER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_FILTER_PADDING", function() { return MAGIC_FILTER_PADDING; });
// Height of main input
var INPUT_HEIGHT = 50; // Heigth of default result line

var RESULT_HEIGHT = 60;
var ACTIONS_HEIGHT = 20;
var CONTENT_VISIBLE_WIDTH = 800 - 2; // Height of no results

var NO_FOUND_ITEMS_HEIGHT = 50;
var STATUS_BAR_HEIGHT = 30;
var WARNING_BAR_HEIGHT = 40; // Maximum results that would be rendered

var MAX_RESULTS = 25; // Results view shows this count of results without scrollbar

var MAX_VISIBLE_RESULTS = 10;
var SUGGESTION_SECTION_HEIGHT = 50;
var SUGGESTION_ITEM_HEIGHT = 50; // The maximum output area height

var MAX_OUTPUT_HEIGHT = MAX_VISIBLE_RESULTS * RESULT_HEIGHT + STATUS_BAR_HEIGHT; // The total padding of the window

var VERTICAL_PADDING = 40; // The height of magic filter element

var MAGIC_FILTER_HEIGHT = 44; // The vertical padding of magic filter element

var MAGIC_FILTER_PADDING = 20;

/***/ }),

/***/ "./appWindow/constants/ui.ts":
/*!***********************************!*\
  !*** ./appWindow/constants/ui.ts ***!
  \***********************************/
/*! exports provided: WINDOW_WIDTH, MAX_WINDOW_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_WIDTH", function() { return WINDOW_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WINDOW_HEIGHT", function() { return MAX_WINDOW_HEIGHT; });
/* harmony import */ var _app_constants_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants/ui */ "./app/constants/ui.ts");
 // Width of main window

var WINDOW_WIDTH = 800; // The maximum window area height

var MAX_WINDOW_HEIGHT = _app_constants_ui__WEBPACK_IMPORTED_MODULE_0__["MAX_OUTPUT_HEIGHT"] + _app_constants_ui__WEBPACK_IMPORTED_MODULE_0__["INPUT_HEIGHT"] + _app_constants_ui__WEBPACK_IMPORTED_MODULE_0__["WARNING_BAR_HEIGHT"];

/***/ }),

/***/ "./appWindow/index.development.ts":
/*!****************************************!*\
  !*** ./appWindow/index.development.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _window_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window/main */ "./appWindow/window/main.ts");
/* harmony import */ var Environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Environment */ "./environment/development.js");
/* harmony import */ var _appWindow_lib_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appWindow/lib/logger */ "./appWindow/lib/logger.ts");
/* harmony import */ var _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @appWindow/lib/config */ "./appWindow/lib/config.ts");
/* harmony import */ var _appWindow_lib_toggleWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @appWindow/lib/toggleWindow */ "./appWindow/lib/toggleWindow.ts");
/* harmony import */ var _appWindow_lib_autoStart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @appWindow/lib/autoStart */ "./appWindow/lib/autoStart.ts");
/* harmony import */ var _appWindow_windowElements_AppTray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @appWindow/windowElements/AppTray */ "./appWindow/windowElements/AppTray.ts");
/* harmony import */ var _appWindow_lib_handleUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @appWindow/lib/handleUrl */ "./appWindow/lib/handleUrl.ts");











/*
import createBackgroundWindow from "./background/createWindow";
import createFeedbackWindow from "./main/windows/feedback/createWindow";
import initAutoUpdater from "./initAutoUpdater";
*/
// Ensure user data directory exists before we access it
// This prevents the race condition on app start for fresh installations
if (!fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(Environment__WEBPACK_IMPORTED_MODULE_3__["USER_DATA"])) {
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.mkdirSync(Environment__WEBPACK_IMPORTED_MODULE_3__["USER_DATA"]);
}

var logger = new _appWindow_lib_logger__WEBPACK_IMPORTED_MODULE_4__["default"]("mainProcess");

var trayIconSrc = function () {
  switch (process.platform) {
    case "darwin":
      return "".concat(__dirname, "/resources/tray_iconTemplate@2x.png");

    case "win32":
      return "".concat(__dirname, "/resources/tray_icon.ico");

    default:
      return "".concat(__dirname, "/resources/tray_icon.png");
  }
}(); //Remove the config file when app start for dev environment


if (Object(Environment__WEBPACK_IMPORTED_MODULE_3__["isDev"])()) {
  _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].remove();
}

var firstPageSrc = "file://".concat(__dirname, "/../app/index.html");

__webpack_require__(/*! electron-debug */ "electron-debug")({
  showDevTools: false
});

var mainWindow;
var backgroundWindow;
var feedbackWindow;
var tray;

var handleUrlFromArgv = function handleUrlFromArgv(argv) {
  logger.info("Make single instnace call back", {
    argv: argv
  }); // Check if the second instance was attempting to launch a URL for our protocol client

  var url = argv.find(function (arg) {
    var protocolRegex = new RegExp("".concat(Environment__WEBPACK_IMPORTED_MODULE_3__["CHIPI_PROTOCOL"], "://"));
    return protocolRegex.test(arg);
  });

  if (url) {
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].emit("open-url", null, url);
  }
};

var gotSingleLock = electron__WEBPACK_IMPORTED_MODULE_0__["app"].requestSingleInstanceLock();

if (!gotSingleLock) {
  electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
} // To help some OS limitation, we need to set the app user mode id same to the appId in the build secion within package file.


electron__WEBPACK_IMPORTED_MODULE_0__["app"].setAppUserModelId("io.chipi.desktop");
electron__WEBPACK_IMPORTED_MODULE_0__["app"].on("second-instance", function (event, argv, cwd) {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }

    mainWindow.focus(); // Protocol handler for win32
    // argv: An array of the second instance’s (command line / deep linked) arguments

    if (process.platform == "win32") {
      handleUrlFromArgv(argv);
    }
  } else {
    logger.warn("Trying to run the second app instance, going to quit");
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
  }
});

var registerHotkey = function registerHotkey() {
  var hotkey = _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].get("hotkey");
  logger.verbose("Setting hot key", hotkey);

  if (!hotkey) {
    // TODO: allow user to set custom hotkey
    hotkey = "Control+Space";
    _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].set("hotkey", hotkey);
  }

  electron__WEBPACK_IMPORTED_MODULE_0__["globalShortcut"].register(hotkey, function () {
    Object(_appWindow_lib_toggleWindow__WEBPACK_IMPORTED_MODULE_6__["default"])(mainWindow);
  });
};

var registerOpenAtLogin = function registerOpenAtLogin() {
  logger.verbose("Setting auto start while app begin", _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].get("openAtLogin"));
  _appWindow_lib_autoStart__WEBPACK_IMPORTED_MODULE_7__["default"].set(_appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].get("openAtLogin"));
};
/**
 * Initate windows for the application
 */


var initiateWindows = function initiateWindows() {
  var mainWindowAppeared = false; // we need to recreate all the windows if the the windows were already created.

  if (mainWindow) {
    mainWindow.webContents.closeDevTools();
    mainWindow.destroy();
    mainWindowAppeared = true;
  } // Main window


  mainWindow = Object(_window_main__WEBPACK_IMPORTED_MODULE_2__["default"])({
    // Main window html
    src: firstPageSrc
  });

  if (mainWindowAppeared) {
    mainWindow.show();
  }

  if (tray) {
    tray.destroy();
  }

  tray = new _appWindow_windowElements_AppTray__WEBPACK_IMPORTED_MODULE_8__["default"]({
    src: trayIconSrc,
    isDev: Object(Environment__WEBPACK_IMPORTED_MODULE_3__["isDev"])(),
    mainWindow: mainWindow,
    feedbackWindow: feedbackWindow
  });
  tray.show(); // Load and register user hotkey from config

  registerHotkey();
  mainWindow.show();
};

electron__WEBPACK_IMPORTED_MODULE_0__["app"].setAsDefaultProtocolClient(Environment__WEBPACK_IMPORTED_MODULE_3__["CHIPI_PROTOCOL"], process.execPath, ["--"]);

if (electron__WEBPACK_IMPORTED_MODULE_0__["app"].dock) {
  electron__WEBPACK_IMPORTED_MODULE_0__["app"].dock.hide();
}
/**
 * The main logic to create windows
 */


electron__WEBPACK_IMPORTED_MODULE_0__["app"].on("ready", function () {
  initiateWindows(); // Register open at login config

  registerOpenAtLogin(); // Unregister and free hotkey for other apps to use, when closing Chipi.

  electron__WEBPACK_IMPORTED_MODULE_0__["app"].on("will-quit", function () {
    // Unregister all shortcuts.
    electron__WEBPACK_IMPORTED_MODULE_0__["globalShortcut"].unregisterAll();
  }); // Show main window when user opens application, but it is already opened

  electron__WEBPACK_IMPORTED_MODULE_0__["app"].on("open-url", function (event, path) {
    return Object(_appWindow_lib_handleUrl__WEBPACK_IMPORTED_MODULE_9__["default"])(mainWindow, backgroundWindow, path);
  });

  if (process.platform == "win32") {
    handleUrlFromArgv(process.argv);
  }
}); // Message floating between Main Window and Background Window

electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on("message", function (event, payload) {
  var toWindow = event.sender === mainWindow.webContents ? backgroundWindow : mainWindow;
  toWindow.webContents.send("message", payload);
});
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on("reloadWindows", function () {
  initiateWindows();
});
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].on("updateSettings", function (event, key, value) {
  logger.info("updateSettings called", {
    event: event,
    key: key,
    value: value
  });
  mainWindow.settingsChanges.emit(key, value); // Show or hide menu bar icon when it is changed in setting

  if (key === "showInTray") {
    value ? tray.show() : tray.hide();
  } // Show or hide "development" section in tray menu


  if (key === "developerMode") {
    tray.setIsDev(Object(Environment__WEBPACK_IMPORTED_MODULE_3__["isDev"])());
  }

  if (key === "openAtLogin") {
    _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].set("openAtLogin", value);
    _appWindow_lib_autoStart__WEBPACK_IMPORTED_MODULE_7__["default"].set(value);
  }

  if (key === "hotkey") {
    var currentShortcut = _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].get("hotkey");
    _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].set("hotkey", value);
    registerHotkey();
  }
});

/***/ }),

/***/ "./appWindow/lib/autoStart.ts":
/*!************************************!*\
  !*** ./appWindow/lib/autoStart.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var auto_launch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! auto-launch */ "auto-launch");
/* harmony import */ var auto_launch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(auto_launch__WEBPACK_IMPORTED_MODULE_1__);
// NOT CURRENTLY IN USE


var appLauncher;
var isLinux = ['win32', 'darwin'].indexOf(process.platform) === -1;

if (isLinux) {
  appLauncher = new auto_launch__WEBPACK_IMPORTED_MODULE_1___default.a({
    name: 'Chipi'
  });
}

var isEnabled = function isEnabled() {
  return isLinux ? appLauncher.isEnabled() : electron__WEBPACK_IMPORTED_MODULE_0__["app"].getLoginItemSettings().openAtLogin;
};

var set = function set(openAtLogin) {
  if (isLinux) {
    return openAtLogin ? appLauncher.enable() : appLauncher.disable();
  }

  return electron__WEBPACK_IMPORTED_MODULE_0__["app"].setLoginItemSettings({
    openAtLogin: openAtLogin ? true : false
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isEnabled: isEnabled,
  set: set
});

/***/ }),

/***/ "./appWindow/lib/config.ts":
/*!*********************************!*\
  !*** ./appWindow/lib/config.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadThemes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadThemes */ "./appWindow/lib/loadThemes.ts");
/* harmony import */ var Environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Environment */ "./environment/development.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var electronApp = electron__WEBPACK_IMPORTED_MODULE_0__["remote"] ? electron__WEBPACK_IMPORTED_MODULE_0__["remote"].app : electron__WEBPACK_IMPORTED_MODULE_0__["app"]; // initiate portable mode
// set data directory to ./userdata

process.argv.forEach(function (arg) {
  if (arg.toLowerCase() === "-p" || arg.toLowerCase() === "--portable") {
    electronApp.setPath("userData", "".concat(process.cwd(), "/userdata"));
  }
});
var CONFIG_FILE = "".concat(electronApp.getPath("userData"), "/config").concat(Object(Environment__WEBPACK_IMPORTED_MODULE_3__["isDev"])() ? "-dev" : "", ".json");
var defaultSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["memoize"])(function () {
  var locale = electronApp.getLocale() || "en-US";

  var _locale$split = locale.split("-"),
      _locale$split2 = _slicedToArray(_locale$split, 2),
      lang = _locale$split2[0],
      country = _locale$split2[1];

  return {
    locale: locale,
    lang: lang,
    country: country,
    // use first theme from loadThemes by default
    theme: Object(_loadThemes__WEBPACK_IMPORTED_MODULE_2__["default"])()[0].value,
    hotkey: "Control+Space",
    onboardingFinished: false,
    showInTray: true,
    firstStart: true,
    developerMode: false,
    cleanOnHide: false,
    plugins: {},
    isMigratedPlugins: false,
    trackingEnabled: false,
    crashReportingEnabled: true,
    openAtLogin: true,
    testingFeature: false,
    logLevel: "info"
  };
});

var readConfig = function readConfig() {
  try {
    return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(CONFIG_FILE).toString());
  } catch (err) {
    return defaultSettings();
  }
};
/**
 * Get a value from global configuration
 * @param  {String} key
 * @return {Any}
 */


var get = function get(key) {
  var config;

  if (!fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(CONFIG_FILE)) {
    // Save default config to local storage
    config = defaultSettings();
    fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
  } else {
    config = readConfig();
  }

  return config[key];
};
/**
 * Write a value to global config. It immedately rewrites global config
 * and notifies all listeners about changes
 *
 * @param  {String} key
 * @param  {Any} value
 */


var set = function set(key, value) {
  var config = _objectSpread({}, defaultSettings(), {}, readConfig());

  config[key] = value;
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2)); // Track settings changes

  /*trackEvent({
    category: 'Settings',
    event: `Change ${key}`,
    label: value
  })*/

  if (electron__WEBPACK_IMPORTED_MODULE_0__["ipcRenderer"]) {
    console.log("notify main process", key, value); // Notify main process about settings changes

    electron__WEBPACK_IMPORTED_MODULE_0__["ipcRenderer"].send("updateSettings", key, value);
  }
};
/**
 * Remove saved config file from userdata, especially for development environment
 */


var remove = function remove() {
  if (fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(CONFIG_FILE)) {
    fs__WEBPACK_IMPORTED_MODULE_1___default.a.unlinkSync(CONFIG_FILE);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  set: set,
  remove: remove
});

/***/ }),

/***/ "./appWindow/lib/getWindowPosition.ts":
/*!********************************************!*\
  !*** ./appWindow/lib/getWindowPosition.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./appWindow/lib/config.ts");
/* harmony import */ var _app_constants_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants/ui */ "./app/constants/ui.ts");
/* harmony import */ var _appWindow_constants_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appWindow/constants/ui */ "./appWindow/constants/ui.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/**
 * Returns true if a window is at least partially visible on the display
 */

var isVisible = function isVisible(windowBounds, displayBounds) {
  return !(windowBounds.x > displayBounds.x + displayBounds.width || windowBounds.x + windowBounds.width < displayBounds.x || windowBounds.y > displayBounds.y + displayBounds.height || windowBounds.y + windowBounds.height < displayBounds.y);
};
/**
 * Computes window position
 */


/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var winWidth = options.width != null ? options.width : _appWindow_constants_ui__WEBPACK_IMPORTED_MODULE_3__["WINDOW_WIDTH"];
  var winHeight = options.heightWithResults != null ? options.heightWithResults : _app_constants_ui__WEBPACK_IMPORTED_MODULE_2__["MAX_VISIBLE_RESULTS"] * _app_constants_ui__WEBPACK_IMPORTED_MODULE_2__["RESULT_HEIGHT"] + _app_constants_ui__WEBPACK_IMPORTED_MODULE_2__["INPUT_HEIGHT"];
  var display = electron__WEBPACK_IMPORTED_MODULE_0__["screen"].getPrimaryDisplay();
  var positions = _config__WEBPACK_IMPORTED_MODULE_1__["default"].get('positions') || {};

  if (display.id in positions) {
    var _positions$display$id = _slicedToArray(positions[display.id], 2),
        _x = _positions$display$id[0],
        _y = _positions$display$id[1];

    var windowBounds = {
      x: _x,
      y: _y,
      winWidth: winWidth,
      winHeight: winHeight
    };

    var isWindowVisible = function isWindowVisible(disp) {
      return isVisible(windowBounds, disp.bounds);
    };

    if (isWindowVisible(display)) {
      return [_x, _y];
    } // The window was moved from the primary screen to a different one.
    // We have to check that the window will be visible somewhere among the attached displays.


    var displays = electron__WEBPACK_IMPORTED_MODULE_0__["screen"].getAllDisplays();
    var isVisibleSomewhere = displays.some(isWindowVisible);

    if (isVisibleSomewhere) {
      return [_x, _y];
    }
  }

  var x = display.bounds.x + (display.workAreaSize.width - winWidth) / 2;
  var y = display.bounds.y + (display.workAreaSize.height - winHeight) / 2;
  return [x, y];
});

/***/ }),

/***/ "./appWindow/lib/handleUrl.ts":
/*!************************************!*\
  !*** ./appWindow/lib/handleUrl.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./appWindow/lib/logger.ts");
/* harmony import */ var _toggleWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleWindow */ "./appWindow/lib/toggleWindow.ts");

 //import { on, send } from '../../lib/rpc'


var logger = new _logger__WEBPACK_IMPORTED_MODULE_1__["default"]("createWindow.handleUrl");
/* harmony default export */ __webpack_exports__["default"] = (function (mainWindow, backgroundWindow, url) {
  var _parse = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(url, true),
      action = _parse.host,
      query = _parse.query;

  logger.verbose("Handle url from chipi protocol", {
    action: action,
    query: query,
    url: url
  }); // Currently only search action supported.
  // We can extend this handler to support more
  // like `plugins/install` or do something plugin-related

  switch (action.toLowerCase()) {
    case "authreturn":
      backgroundWindow.webContents.send("message", {
        message: "authCodeReceived",
        payload: query.code
      });
      Object(_toggleWindow__WEBPACK_IMPORTED_MODULE_2__["showWindow"])(mainWindow);
      return;

    default:
      Object(_toggleWindow__WEBPACK_IMPORTED_MODULE_2__["showWindow"])(mainWindow);
      return;
  }
});

/***/ }),

/***/ "./appWindow/lib/loadThemes.ts":
/*!*************************************!*\
  !*** ./appWindow/lib/loadThemes.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./appWindow/lib/logger.ts");

var logger = new _logger__WEBPACK_IMPORTED_MODULE_0__["default"]('loadThemes');
/**
 * Load all available themes
 *
 * @return {Array<Object>} Array of objects {value, label}.
 *                         Label is text that is shown in preferences theme selector
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var isHot = parseInt("1") == 1;
  console.log("process.env.HOT: " + "1");
  console.log("process.env.HOT: " + isHot);
  console.log("process.env.NODE_ENV: " + "development");
  var prefix = isHot ? 'http://localhost:3000/' : '../';
  logger.info('Theme prefix', {
    prefix: prefix,
    hot: Object({"NODE_ENV":"development","HOT":"1"})
  });
  return [{
    value: "".concat(prefix, "dist/css/themes/light.css"),
    label: 'Light'
  }, {
    value: "".concat(prefix, "dist/css/themes/dark.css"),
    label: 'Dark'
  }];
});

/***/ }),

/***/ "./appWindow/lib/logger.ts":
/*!*********************************!*\
  !*** ./appWindow/lib/logger.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Environment */ "./environment/development.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dateformat */ "dateformat");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var tsFormat = function tsFormat() {
  return dateformat__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), "UTC:yyyy-mm-dd'T'HH:MM:ss.l'Z'");
};

var internalLogger = winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger({
  level: Environment__WEBPACK_IMPORTED_MODULE_1__["LOG_CONFIG"].level,
  //format: winston.format.json(),
  //format: winston.format.json(),
  format: winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.combine(winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.json({
    replacer: replaceErrors
  })),
  transports: [new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({
    filename: "".concat(Environment__WEBPACK_IMPORTED_MODULE_1__["USER_DATA"], "/combined.log")
  }), new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({
    filename: "".concat(Environment__WEBPACK_IMPORTED_MODULE_1__["USER_DATA"], "/error.log"),
    level: "error"
  }), new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({
    level: "error"
  })]
});

if (true) {
  internalLogger.add(new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({
    level: Environment__WEBPACK_IMPORTED_MODULE_1__["LOG_CONFIG"].level
  }));
}

function replaceErrors(key, value) {
  if (value instanceof Buffer) {
    return value.toString("base64");
  } else if (value instanceof Error) {
    var error = {};
    Object.getOwnPropertyNames(value).forEach(function (key) {
      error[key] = value[key];
    });
    return error;
  }

  return value;
}

var Logger = /*#__PURE__*/function () {
  function Logger(category) {
    _classCallCheck(this, Logger);

    _defineProperty(this, "logCategory", void 0);

    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    this.logCategory = category;
  }

  _createClass(Logger, [{
    key: "info",
    value: function info(message, data) {
      internalLogger.info({
        timestamp: tsFormat(),
        logCategory: this.logCategory,
        message: message,
        data: data || ""
      });
    }
  }, {
    key: "debug",
    value: function debug(message, data) {
      internalLogger.debug({
        timestamp: tsFormat(),
        logCategory: this.logCategory,
        message: message,
        data: data || ""
      });
    }
  }, {
    key: "verbose",
    value: function verbose(message, data) {
      internalLogger.verbose({
        timestamp: tsFormat(),
        logCategory: this.logCategory,
        message: message,
        data: data || ""
      });
    }
  }, {
    key: "error",
    value: function error(message, data) {
      internalLogger.error({
        timestamp: tsFormat(),
        logCategory: this.logCategory,
        message: message,
        data: data || ""
      });
    }
  }, {
    key: "warn",
    value: function warn(message, data) {
      internalLogger.warn({
        timestamp: tsFormat(),
        logCategory: this.logCategory,
        message: message,
        data: data || ""
      });
    }
  }]);

  return Logger;
}();



/***/ }),

/***/ "./appWindow/lib/toggleWindow.ts":
/*!***************************************!*\
  !*** ./appWindow/lib/toggleWindow.ts ***!
  \***************************************/
/*! exports provided: default, toggleOff, showWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOff", function() { return toggleOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWindow", function() { return showWindow; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appWindow_lib_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @appWindow/lib/logger */ "./appWindow/lib/logger.ts");
/* harmony import */ var Environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Environment */ "./environment/development.js");



var windowScreen = electron__WEBPACK_IMPORTED_MODULE_0__["screen"] ? electron__WEBPACK_IMPORTED_MODULE_0__["screen"] : electron__WEBPACK_IMPORTED_MODULE_0__["remote"] ? electron__WEBPACK_IMPORTED_MODULE_0__["remote"].screen : null;
var log = new _appWindow_lib_logger__WEBPACK_IMPORTED_MODULE_1__["default"]('toggleWindow');
var cachedXOffsetPercent, cachedYOffsetPercent;
/**
 * Show or hide main window
 * @return {BrowserWindow} appWindow
 */

/* harmony default export */ __webpack_exports__["default"] = (function (appWindow) {
  log.verbose("Toggling Window");

  if (appWindow.isVisible()) {
    toggleOff(appWindow);
  } else {
    toggleOn(appWindow);
  }
});
/**
 * 
 * @param {*} appWindow The application window of the CHIPI client
 */

var toggleOff = function toggleOff(appWindow) {
  // Ignore toogle off call if the window cannot toogle off
  if (!appWindow) {
    return;
  }

  if (!appWindow.canToggleOff) {
    return;
  }

  updateWindowOffsets(appWindow);
  appWindow.blur(); // once for blurring the content of the window(?)

  if (process.platform === 'darwin') {
    appWindow.blur(); // On Mac, twice somehow restores focus to prev foreground window
  }

  appWindow.hide(); //app.dock.hide()

  appWindow.removeListener('blur', function () {
    return toggleOff(appWindow);
  });
};

var toggleOn = function toggleOn(appWindow) {
  var windowPosition = calculateWindowPosition(appWindow);
  appWindow.setPosition(windowPosition.x, windowPosition.y);
  showWindow(appWindow);

  if (!Object(Environment__WEBPACK_IMPORTED_MODULE_2__["isDev"])()) {
    appWindow.on('blur', function () {
      return toggleOff(appWindow);
    });
  }
};

var showWindow = function showWindow(appWindow) {
  appWindow.setVisibleOnAllWorkspaces(true);
  appWindow.show();
  appWindow.focus();
  appWindow.setVisibleOnAllWorkspaces(false);

  if (Object(Environment__WEBPACK_IMPORTED_MODULE_2__["isDev"])() && electron__WEBPACK_IMPORTED_MODULE_0__["app"].dock && !electron__WEBPACK_IMPORTED_MODULE_0__["app"].dock.isVisible()) {
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].dock.show();
  }
};

var updateWindowOffsets = function updateWindowOffsets(appWindow) {
  if (!appWindow.isVisible()) {
    return;
  }

  var windowPosition = appWindow.getPosition();
  var currentDisplay = windowScreen.getDisplayNearestPoint({
    x: windowPosition[0],
    y: windowPosition[1]
  });
  var bounds = currentDisplay.bounds;
  cachedXOffsetPercent = (windowPosition[0] - bounds.x) / bounds.width;
  cachedYOffsetPercent = (windowPosition[1] - bounds.y) / bounds.width;
};

var calculateWindowPosition = function calculateWindowPosition(appWindow) {
  // Get mouse cursor absolute position
  var _windowScreen$getCurs = windowScreen.getCursorScreenPoint(),
      x = _windowScreen$getCurs.x,
      y = _windowScreen$getCurs.y; // Find the display where the mouse cursor will be


  var currentDisplay = windowScreen.getDisplayNearestPoint({
    x: x,
    y: y
  });
  var bounds = currentDisplay.bounds;
  log.verbose('Bounds of the current display', {
    currentDisplay: currentDisplay,
    bounds: bounds
  });
  var winX, winY;

  if (cachedXOffsetPercent && cachedYOffsetPercent) {
    winX = Math.ceil(cachedXOffsetPercent * bounds.width + bounds.x);
    winY = Math.ceil(cachedYOffsetPercent * bounds.width + bounds.y);
  } else {
    winX = bounds.x + Math.ceil((bounds.width - appWindow.getSize()[0]) / 2);
    winY = bounds.y + Math.ceil((bounds.height - appWindow.getSize()[1]) / 6);
  }

  return {
    x: winX,
    y: winY
  };
};

/***/ }),

/***/ "./appWindow/window/main.ts":
/*!**********************************!*\
  !*** ./appWindow/window/main.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appWindow_constants_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appWindow/constants/ui */ "./appWindow/constants/ui.ts");
/* harmony import */ var _appWindow_windowElements_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appWindow/windowElements/menu */ "./appWindow/windowElements/menu.ts");
/* harmony import */ var _appWindow_lib_toggleWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appWindow/lib/toggleWindow */ "./appWindow/lib/toggleWindow.ts");
/* harmony import */ var _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @appWindow/lib/config */ "./appWindow/lib/config.ts");
/* harmony import */ var _appWindow_lib_getWindowPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @appWindow/lib/getWindowPosition */ "./appWindow/lib/getWindowPosition.ts");
/* harmony import */ var _appWindow_lib_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @appWindow/lib/logger */ "./appWindow/lib/logger.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var logger = new _appWindow_lib_logger__WEBPACK_IMPORTED_MODULE_7__["default"]("MainCreateWindow");
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var src = _ref.src;

  var _getWindowPosition = Object(_appWindow_lib_getWindowPosition__WEBPACK_IMPORTED_MODULE_6__["default"])({}),
      _getWindowPosition2 = _slicedToArray(_getWindowPosition, 2),
      x = _getWindowPosition2[0],
      y = _getWindowPosition2[1]; //const { width, height } = screen.getPrimaryDisplay().workAreaSize


  var iconSrc = function iconSrc() {
    switch (process.platform) {
      case "darwin":
        return "".concat(__dirname, "/resources/icon.ico");

      case "win32":
        return "".concat(__dirname, "/resources/icon-white.ico");

      default:
        return "".concat(__dirname, "/resources/icon.ico");
    }
  };

  var browserWindowOptions = {
    width: _appWindow_constants_ui__WEBPACK_IMPORTED_MODULE_2__["WINDOW_WIDTH"],
    minWidth: _appWindow_constants_ui__WEBPACK_IMPORTED_MODULE_2__["WINDOW_WIDTH"],
    height: _appWindow_constants_ui__WEBPACK_IMPORTED_MODULE_2__["MAX_WINDOW_HEIGHT"],
    x: x,
    y: y,
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
  var mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"](browserWindowOptions);
  mainWindow.loadURL(src);
  mainWindow["settingsChanges"] = new events__WEBPACK_IMPORTED_MODULE_1___default.a();
  mainWindow["canToggleOff"] = true;
  /**
   * Set quit function to the window
   */

  mainWindow["quit"] = function () {
    return quitApplication();
  }; // Function to toggle main window


  var toggleMainWindow = function toggleMainWindow() {
    return Object(_appWindow_lib_toggleWindow__WEBPACK_IMPORTED_MODULE_4__["default"])(mainWindow);
  }; // Function to show main window


  var showMainWindow = function showMainWindow() {
    mainWindow && mainWindow.show();
    mainWindow && mainWindow.focus();
  };
  /**
   * Quit the application
   */


  var quitApplication = function quitApplication() {
    mainWindow.closable = true;
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
  };

  mainWindow.on("close", function () {
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
  });
  mainWindow.webContents.on("new-window", function (event, url) {
    electron__WEBPACK_IMPORTED_MODULE_0__["shell"].openExternal(url);
    event.preventDefault();
  });
  mainWindow.webContents.on("will-navigate", function (event, url) {
    if (url !== mainWindow.webContents.getURL()) {
      electron__WEBPACK_IMPORTED_MODULE_0__["shell"].openExternal(url);
      event.preventDefault();
    }
  }); // Change global hotkey if it is changed in app settings

  mainWindow["settingsChanges"].on("hotkey", function (value) {
    var currentShortcut = _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].get("hotkey");
    electron__WEBPACK_IMPORTED_MODULE_0__["globalShortcut"].unregister(currentShortcut);
    _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].set("hotkey", value);
    electron__WEBPACK_IMPORTED_MODULE_0__["globalShortcut"].register(value, toggleMainWindow);
  }); // Once window finish load the dom, display as required

  mainWindow.webContents.on("did-finish-load", function () {
    logger.info("Main window contents did finish load");

    if (_appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].get("firstStart")) {
      showMainWindow(); // Save in config information, that application has been started

      _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_5__["default"].set("firstStart", false);
    }
  }); // Handle window.hide: if cleanOnHide value in preferences is true
  // we clear all results and show empty window every time

  var resetResults = function resetResults() {
    mainWindow.webContents.send("message", {
      message: "showTerm",
      payload: ""
    });
  }; // Handle change of cleanOnHide value in settins


  var handleCleanOnHideChange = function handleCleanOnHideChange(value) {
    if (value) {
      mainWindow.on("hide", resetResults);
    } else {
      mainWindow.removeListener("hide", resetResults);
    }
  }; // Set or remove handler when settings changed


  mainWindow["settingsChanges"].on("cleanOnHide", handleCleanOnHideChange); // Set initial handler if it is needed
  //We don't want to clean the screen on hide at the moment

  handleCleanOnHideChange(false
  /*config.get('cleanOnHide')*/
  ); // Restore focus in previous application
  // MacOS only: https://github.com/electron/electron/blob/master/docs/api/app.md#apphide-macos

  if (process.platform === "darwin") {
    /*mainWindow.on('hide', () => {
      app.hide()
    })*/
  }

  electron__WEBPACK_IMPORTED_MODULE_0__["app"].on("activate", showMainWindow);
  Object(_appWindow_windowElements_menu__WEBPACK_IMPORTED_MODULE_3__["default"])(mainWindow);
  return mainWindow;
});

/***/ }),

/***/ "./appWindow/windowElements/AppTray.ts":
/*!*********************************************!*\
  !*** ./appWindow/windowElements/AppTray.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppTray; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appWindow_lib_toggleWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @appWindow/lib/toggleWindow */ "./appWindow/lib/toggleWindow.ts");
/* harmony import */ var _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appWindow/lib/config */ "./appWindow/lib/config.ts");
/* harmony import */ var _appWindow_lib_autoStart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appWindow/lib/autoStart */ "./appWindow/lib/autoStart.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Class that controls state of icon in menu bar
 */

var AppTray = /*#__PURE__*/function () {
  /**
   * @param  {String} options.src Absolute path for tray icon
   * @param  {Function} options.isDev Development mode or not
   * @param  {BrowserWindow} options.mainWindow
   * @param  {BrowserWindow} options.backgroundWindow
   * @return {AppTray}
   */
  function AppTray(options) {
    _classCallCheck(this, AppTray);

    _defineProperty(this, "tray", void 0);

    _defineProperty(this, "options", void 0);

    this.tray = null;
    this.options = options;
  }
  /**
   * Show application icon in menu bar
   */


  _createClass(AppTray, [{
    key: "show",
    value: function show() {
      var _this = this;

      var tray = new electron__WEBPACK_IMPORTED_MODULE_0__["Tray"](this.options.src);
      tray.setToolTip("Chipi");
      tray.setContextMenu(this.buildMenu());
      tray.on("double-click", function (event) {
        Object(_appWindow_lib_toggleWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.options.mainWindow);
      });
      this.tray = tray;
    }
  }, {
    key: "setIsDev",
    value: function setIsDev(isDev) {
      this.options.isDev = isDev;

      if (this.tray) {
        this.tray.setContextMenu(this.buildMenu());
      }
    }
  }, {
    key: "buildMenu",
    value: function buildMenu() {
      var _this$options = this.options,
          mainWindow = _this$options.mainWindow,
          backgroundWindow = _this$options.backgroundWindow,
          isDev = _this$options.isDev,
          feedbackWindow = _this$options.feedbackWindow;
      var separator = {
        type: "separator"
      };
      var template = [{
        label: "Toggle Chipi",
        click: function click() {
          return Object(_appWindow_lib_toggleWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(mainWindow);
        }
      }, {
        label: "Toggle Shortcut",
        submenu: [{
          label: "1.",
          accelerator: "Control+Space",
          type: "radio",
          checked: "Control+Space" === _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].get("hotkey"),
          click: function click() {
            electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].emit("updateSettings", null, "hotkey", "Control+Space");
          }
        }, {
          label: "2.",
          accelerator: "Control+Shift+Space",
          type: "radio",
          checked: "Control+Shift+Space" === _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].get("hotkey"),
          click: function click() {
            electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].emit("updateSettings", null, "hotkey", "Control+Shift+Space");
          }
        }, {
          label: "3.",
          accelerator: "Alt+Space",
          type: "radio",
          checked: "Alt+Space" === _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].get("hotkey"),
          click: function click() {
            electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].emit("updateSettings", null, "hotkey", "Alt+Space");
          }
        }, {
          label: "4.",
          accelerator: "Alt+Shift+Space",
          type: "radio",
          checked: "Alt+Shift+Space" === _appWindow_lib_config__WEBPACK_IMPORTED_MODULE_2__["default"].get("hotkey"),
          click: function click() {
            electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].emit("updateSettings", null, "hotkey", "Alt+Shift+Space");
          }
        }]
      }, separator, {
        label: "Launch on startup",
        type: "checkbox",
        checked: _appWindow_lib_autoStart__WEBPACK_IMPORTED_MODULE_3__["default"].isEnabled(),
        click: function click(menuItem) {
          electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].emit("updateSettings", null, "openAtLogin", menuItem.checked);
        }
      }, separator, {
        label: "Development",
        submenu: [{
          label: "DevTools (main)",
          click: function click() {
            return mainWindow.webContents.openDevTools({
              mode: "detach"
            });
          }
        }]
      }, separator, {
        label: "About",
        click: function click() {
          var currentVersion = electron__WEBPACK_IMPORTED_MODULE_0__["app"].getVersion();
          electron__WEBPACK_IMPORTED_MODULE_0__["dialog"].showMessageBox({
            title: "Chipi",
            message: "Version: ".concat(currentVersion)
          });
        }
      }, separator, {
        label: "Quit",
        click: function click() {
          return mainWindow.quit();
        }
      }];
      return electron__WEBPACK_IMPORTED_MODULE_0__["Menu"].buildFromTemplate(template);
    }
    /**
     * Hide icon in menu bar
     */

  }, {
    key: "hide",
    value: function hide() {
      if (this.tray) {
        this.tray.destroy();
        this.tray = null;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.tray) {
        this.tray.destroy();
        this.tray = null;
      }
    }
  }]);

  return AppTray;
}();



/***/ }),

/***/ "./appWindow/windowElements/menu.ts":
/*!******************************************!*\
  !*** ./appWindow/windowElements/menu.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildMenu; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);

function buildMenu(mainWindow) {
  var template = [{
    label: 'Chipi',
    submenu: [{
      label: 'About Chipi'
    }, {
      type: 'separator'
    }, {
      label: 'Hide Chipi',
      accelerator: 'Command+H'
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Shift+H'
    }, {
      label: 'Show All'
    }, {
      type: 'separator'
    }, {
      label: 'Undo',
      accelerator: 'CmdOrCtrl+Z'
    }, {
      label: 'Redo',
      accelerator: 'Shift+CmdOrCtrl+Z'
    }, {
      type: 'separator'
    }, {
      label: 'Cut',
      accelerator: 'CmdOrCtrl+X'
    }, {
      label: 'Copy',
      accelerator: 'CmdOrCtrl+C'
    }, {
      label: 'Paste',
      accelerator: 'CmdOrCtrl+V'
    }, {
      label: 'Select All',
      accelerator: 'CmdOrCtrl+A'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: function click() {
        mainWindow.setClosable(true);
        electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
      }
    }]
  }];
  var menu = electron__WEBPACK_IMPORTED_MODULE_0__["Menu"].buildFromTemplate(template);
  electron__WEBPACK_IMPORTED_MODULE_0__["Menu"].setApplicationMenu(menu);
}

/***/ }),

/***/ "./environment/development.js":
/*!************************************!*\
  !*** ./environment/development.js ***!
  \************************************/
/*! exports provided: USER_DATA, isDev, CHECK_UPDATES, CHIPI_PROTOCOL, AWS_COGNITO, GOOGLE_AUTH, LOG_CONFIG, AUTH_TOKEN_STORAGE, CHIPI_WEB_CLIENT, CHIPI_APIS, CHIPI_ANALYTICS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DATA", function() { return USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return isDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_UPDATES", function() { return CHECK_UPDATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHIPI_PROTOCOL", function() { return CHIPI_PROTOCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWS_COGNITO", function() { return AWS_COGNITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_AUTH", function() { return GOOGLE_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_CONFIG", function() { return LOG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_TOKEN_STORAGE", function() { return AUTH_TOKEN_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHIPI_WEB_CLIENT", function() { return CHIPI_WEB_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHIPI_APIS", function() { return CHIPI_APIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHIPI_ANALYTICS", function() { return CHIPI_ANALYTICS; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);

var USER_DATA = (electron__WEBPACK_IMPORTED_MODULE_0__["app"] || electron__WEBPACK_IMPORTED_MODULE_0__["remote"].app).getPath("userData");
var isDev = function isDev() {
  return true;
};
var CHECK_UPDATES = false;
var AWS_COGNITO_HOST = "https://identity.chipi-dev.io";
var CHIPI_PROTOCOL = "chipi-dev";
var AWS_COGNITO = {
  host: AWS_COGNITO_HOST,
  userPoolWebClientId: "5q7ndnokabmhtuohdpucng2aud",
  authorizationUrl: AWS_COGNITO_HOST + "/oauth2/authorize",
  tokenUrl: AWS_COGNITO_HOST + "/oauth2/token",
  redirectUrl: "https://desktop.chipi-uat.io/oauth2callback",
  redirectUrlWebFlow: "https://web.chipi-dev.io/"
};
var GOOGLE_AUTH = {
  authPath: "https://accounts.google.com/o/oauth2/v2/auth"
};
var LOG_CONFIG = {
  level: "verbose"
};
var AUTH_TOKEN_STORAGE = {
  serviceName: "io.chipi.client.desktop.dev",
  secureStoreUserName: "ChipiCognitoUser",
  sessionPartitionName: "chipiAuthSession",
  refreshTokenCookieName: "refreshToken",
  accessTokenCookieName: "accessToken"
};
var CHIPI_WEB_CLIENT = {
  host: "https://web.chipi-dev.io",
  authorizationHashPage: "authorization",
  externalRedirect: "".concat(CHIPI_PROTOCOL, "://authreturn"),
  // Tells web client where the external redirect should redirect after receiving authcode
  authRedirect: "https://web.chipi-dev.io/" // Web client always uses this value for Cognito oAuth flow, the desktop client also needs to use this value to retrieve the refresh token.

};
var CHIPI_APIS = {
  searchApiHost: "https://api.chipi-dev.io/search",
  connectorApiHost: "https://api.chipi-dev.io/connector",
  indexingApiHost: "https://api.chipi-dev.io/indexing",
  resourceApiHost: "https://api.chipi-dev.io/resource",
  helpApiHost: ""
};
var CHIPI_ANALYTICS = {
  analyticsEventsApiHost: "",
  deliveryStreamName: "Chipi.Analytics.Events-dev"
};

/***/ }),

/***/ "auto-launch":
/*!******************************!*\
  !*** external "auto-launch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auto-launch");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "electron-debug":
/*!*********************************!*\
  !*** external "electron-debug" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-debug");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map