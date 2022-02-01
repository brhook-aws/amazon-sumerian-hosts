// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const webpack = require('webpack');
const path = require('path');

const babylonPath = path.resolve(__dirname, './src/Babylon.js/');

const baseConfig = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  devtool: 'eval-source-map',
};

const babylonConfig = {
  ...baseConfig,
  resolve: {
    alias: {
      app: babylonPath,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      BABYLON: 'babylonjs',
    }),
  ],
};

module.exports = [babylonConfig];
