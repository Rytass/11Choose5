// @flow
/* eslint global-require: 0, import/no-extraneous-dependencies: 0 */

import {
  app,
  BrowserWindow,
} from 'electron';
import debug from 'debug';
import path from 'path';
import url from 'url';
import { loadMenu } from './helper/menu';

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = parseInt(process.env.PORT || '7600', 10);

if (NODE_ENV !== 'production') {
  const debugDevServer = debug('GamingBox:DevServer');
  const express = require('express');
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  const server = express();

  const compiler = webpack({
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'entry.jsx'),
    ],
    target: 'electron-renderer',
    plugins: [
      new webpack.DefinePlugin({

      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    output: {
      filename: 'bundle.js',
      path: '/',
      publicPath: `http://localhost:${PORT}/`,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            'babel-loader',
          ],
          include: __dirname,
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            },
          }],
          include: __dirname,
        },
      ],
    },
  });

  server
    .use(express.static(path.resolve(__dirname, 'static')))
    .use(devMiddleware(compiler, {
      hot: true,
      publicPath: '/',
    }))
    .use(hotMiddleware(compiler))
    .listen(PORT, () => debugDevServer('Server Start!'));
}

let mainWindow: ?{
  webContents: {
    openDevTools: Function,
  },
};

app.on('ready', () => {
  const config = {
    width: 1280,
    height: 750,
  };

  mainWindow = new BrowserWindow(config);

  if (NODE_ENV === 'production') {
    mainWindow.loadURL(url.format({
      pathname: path.resolve(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true,
    }));
  } else {
    mainWindow.loadURL(url.format({
      pathname: '/index.html',
      hostname: 'localhost',
      port: PORT,
      protocol: 'http:',
      slashes: true,
    }));
  }

  mainWindow.on('show', () => {
    if (NODE_ENV !== 'production') {
      if (mainWindow && mainWindow.webContents) {
        mainWindow.webContents.openDevTools();
      }
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  loadMenu(mainWindow);
});

app.on('window-all-closed', () => app.quit());
