// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const webpack = require('webpack');
const path = require('path');

const corePath = path.resolve(__dirname, 'src/core/');

const coreConfig = {
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

  resolve: {
    alias: {
      core: corePath,
      app: corePath,

    },
  },
};

module.exports = [coreConfig];
