const {
  app,
  BrowserWindow,
  Menu,
  MenuItem,
  ipcMain,
  clipboard,
} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

app.on('ready', () => {
  const config = {
    width: 1210,
    height: 700,
  };

  mainWindow = new BrowserWindow(config);

  mainWindow.loadURL(url.format({
    pathname: path.resolve(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  mainWindow.setAutoHideMenuBar(true);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const template = [
    {
      label: 'Application',
      submenu: [
        { label: 'About Application', selector: 'orderFrontStandardAboutPanel:' },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'Command+Q', click: () => app.quit() },
      ],
    }, {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

  let onCopyContextAll = null;

  const ctxMenu = new Menu();

  ctxMenu.append(new MenuItem({ role: 'copy', label: '复制' }));
  ctxMenu.append(new MenuItem({ role: 'paste', label: '粘贴' }));
  ctxMenu.append(new MenuItem({
    label: '复制全部',
    click: () => {
      if (onCopyContextAll) {
        onCopyContextAll();
      }
    },
  }));

  ipcMain.on('CLIPBOARD_CACHE', (event, data) => {
    onCopyContextAll = () => {
      clipboard.writeText(data, 'selection');
    };
  });

  mainWindow.webContents.on('context-menu', (e, params) => ctxMenu.popup(mainWindow, params.x, params.y));
});

app.on('window-all-closed', () => app.quit());
