// @flow

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV || 'development',
  entry: [
    path.resolve(__dirname, 'entry.jsx'),
  ],
  target: 'electron-renderer',
  plugins: [
    new webpack.DefinePlugin({

    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
};
