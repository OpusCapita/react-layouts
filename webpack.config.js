const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const nodeExternals = require('webpack-node-externals');
const flexbugs = require('postcss-flexbugs-fixes');
const merge = require('webpack-merge');

const libraryName = 'react-layouts';
const outputJsFile = `${libraryName}.js`;

const getBaseConfiguration = require('./webpack/base.config.js');

const params = {
  root: __dirname,
  buildPath: 'lib',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputJsFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
};

const config = merge(getBaseConfiguration(params), {
  devtool: 'source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
              minimize: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
              minimize: true,
            },
          },
        ],
      },
    ],
  },
});

module.exports = config;
