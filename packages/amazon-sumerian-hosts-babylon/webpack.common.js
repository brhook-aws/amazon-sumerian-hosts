// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const babylonPath = path.resolve(__dirname, './src/Babylon.js/');

const babylonConfig = {
  mode: 'production',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'HOST_BABLYON',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: '(typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this)',
    devtoolModuleFilenameTemplate: require('../webpack-utils')
      .devtoolModuleFilenameTemplate,
  },
  entry: {
    'host.babylon': ['babel-polyfill', './src/Babylon.js/index.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ico)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader?name=[name].[ext]',
      },
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
  plugins: [
    new webpack.BannerPlugin({
      banner: `Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\nSPDX-License-Identifier: MIT-0`,
      entryOnly: true
    }),
  ],
  resolve: {
    alias: {
      app: babylonPath,
      // '@amazon-sumerian-hosts/core': require.resolve('@amazon-sumerian-hosts/core'),
    },
    // symlinks: false
  },
};

module.exports = babylonConfig;
