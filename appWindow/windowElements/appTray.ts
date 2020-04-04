import { Menu, Tray, app, dialog, ipcMain, shell, MenuItem, MenuItemConstructorOptions } from "electron";
import toggleWindow from "@appWindow/lib/toggleWindow";
import checkForUpdates from "@appWindow/lib/checkForUpdates";
import config from "@appWindow/lib/config";
import autoStart from "@appWindow/lib/autoStart";

/**
 * Class that controls state of icon in menu bar
 */
export default class AppTray {
  private tray: Tray;
  private options: any;

  /**
   * @param  {String} options.src Absolute path for tray icon
   * @param  {Function} options.isDev Development mode or not
   * @param  {BrowserWindow} options.mainWindow
   * @param  {BrowserWindow} options.backgroundWindow
   * @return {AppTray}
   */
  constructor(options) {
    this.tray = null;
    this.options = options;
  }
  /**
   * Show application icon in menu bar
   */
  show() {
    const tray = new Tray(this.options.src);
    tray.setToolTip("Chipi");
    tray.setContextMenu(this.buildMenu());
    tray.on("double-click", event => {
      toggleWindow(this.options.mainWindow);
    });
    this.tray = tray;
  }

  setIsDev(isDev) {
    this.options.isDev = isDev;
    if (this.tray) {
      this.tray.setContextMenu(this.buildMenu());
    }
  }

  buildMenu() {
    const {
      mainWindow,
      backgroundWindow,
      isDev,
      feedbackWindow
    } = this.options;
    const separator: MenuItemConstructorOptions = { type: "separator" };

    const template: MenuItemConstructorOptions[] = [
      {
        label: "Toggle Chipi",
        click: () => toggleWindow(mainWindow)
      },
      {
        label: "Toggle Shortcut",
        submenu: [
          {
            label: "1.",
            accelerator: "Control+Space",
            type: "radio",
            checked: "Control+Space" === config.get("hotkey"),
            click() {
              ipcMain.emit("updateSettings", null, "hotkey", "Control+Space");
            }
          },
          {
            label: "2.",
            accelerator: "Control+Shift+Space",
            type: "radio",
            checked: "Control+Shift+Space" === config.get("hotkey"),
            click() {
              ipcMain.emit(
                "updateSettings",
                null,
                "hotkey",
                "Control+Shift+Space"
              );
            }
          },
          {
            label: "3.",
            accelerator: "Alt+Space",
            type: "radio",
            checked: "Alt+Space" === config.get("hotkey"),
            click() {
              ipcMain.emit("updateSettings", null, "hotkey", "Alt+Space");
            }
          },
          {
            label: "4.",
            accelerator: "Alt+Shift+Space",
            type: "radio",
            checked: "Alt+Shift+Space" === config.get("hotkey"),
            click() {
              ipcMain.emit("updateSettings", null, "hotkey", "Alt+Shift+Space");
            }
          }
        ]
      },
      separator,
      {
        label: "Launch on startup",
        type: "checkbox",
        checked: autoStart.isEnabled(),
        click(menuItem) {
          ipcMain.emit("updateSettings", null, "openAtLogin", menuItem.checked);
        }
      },
      separator,
      {
        label: "Development",
        submenu: [
          {
            label: "DevTools (main)",
            click: () => mainWindow.webContents.openDevTools({ mode: "detach" })
          }
        ]
      },
      separator,
      {
        label: "About",
        click: () => {
          const currentVersion = app.getVersion();
  
          dialog.showMessageBox({
            title: "Chipi",
            message: `Version: ${currentVersion}`
          });
        }
      },
      separator,
      {
        label: "Quit",
        click: () => mainWindow.quit()
      }
    ];

    return Menu.buildFromTemplate(template);
  }
  /**
   * Hide icon in menu bar
   */
  hide() {
    if (this.tray) {
      this.tray.destroy();
      this.tray = null;
    }
  }

  destroy() {
    if (this.tray) {
      this.tray.destroy();
      this.tray = null;
    }
  }
}
