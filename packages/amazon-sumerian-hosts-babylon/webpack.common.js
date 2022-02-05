// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const babylonPath = path.resolve(__dirname, 'src/Babylon.js/');

const transpileModules = ["@amazon-sumerian-hosts/core"]; // using scoped packages
const PATH_DELIMITER = "[\\\\/]"; // match 2 antislashes or one slash
const safePath = (module) => module.split(/[\\\/]/g).join(PATH_DELIMITER);
const generateIncludes = (modules) => {
  return [
    new RegExp(`(${modules.map(safePath).join("|")})$`),
    new RegExp(
      `(${modules.map(safePath).join("|")})${PATH_DELIMITER}(?!.*node_modules)`
    ),
  ];
};

const babylonConfig = {
  mode: 'production',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'HOST',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: '(typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this)'
  },
  entry: {
    'host.babylon': ['./src/Babylon.js/index.js'],
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
        include: generateIncludes(transpileModules),
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
