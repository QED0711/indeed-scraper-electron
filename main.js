const { app, BrowserWindow } = require('electron')

function createWindow () {
  let window = new BrowserWindow({ width: 1200, height: 600 })


  window.loadFile('index.html')
  window.webContents.openDevTools();

}

app.on('ready', createWindow)