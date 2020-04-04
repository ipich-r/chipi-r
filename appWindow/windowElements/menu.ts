import {Menu, app, MenuItemConstructorOptions} from 'electron'

export default function buildMenu(mainWindow) {
  const template : MenuItemConstructorOptions[] = [{
    label: 'Chipi',
    submenu: [
      { label: 'About Chipi' },
      { type: 'separator' },
      { label: 'Hide Chipi', accelerator: 'Command+H', },
      { label: 'Hide Others', accelerator: 'Command+Shift+H', },
      { label: 'Show All' },
      { type: 'separator'},
      { label: 'Undo', accelerator: 'CmdOrCtrl+Z'},
      { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z' },
      { type: 'separator'},
      { label: 'Cut', accelerator: 'CmdOrCtrl+X' },
      { label: 'Copy', accelerator: 'CmdOrCtrl+C' },
      { label: 'Paste', accelerator: 'CmdOrCtrl+V' },
      { label: 'Select All', accelerator: 'CmdOrCtrl+A' },
      { type: 'separator'},
      { label: 'Quit', accelerator: 'Command+Q', click() { mainWindow.setClosable(true); app.quit() } }
    ]
  }]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
