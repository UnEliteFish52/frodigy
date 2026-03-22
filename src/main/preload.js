const { contextBridge, ipcRenderer } = require('electron');
const { marked } = require('marked');

contextBridge.exposeInMainWorld('markdown', {
  parse: (text) => marked.parse(text)
});

contextBridge.exposeInMainWorld('frodigy', {
  version: '1.0.0',
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
  on: (channel, callback) => {
    const subscription = (_event, ...args) => callback(...args);
    ipcRenderer.on(channel, subscription);
    return () => ipcRenderer.removeListener(channel, subscription);
  }
});
