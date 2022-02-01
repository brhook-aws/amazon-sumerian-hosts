// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const webpack = require('webpack');
const path = require('path');

const threePath = path.resolve(__dirname, './src/three.js/');

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

const threeConfig = {
  ...baseConfig,
  resolve: {
    alias: {
      app: threePath,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      THREE: 'three',
    }),
  ],
};

module.exports = [threeConfig];
