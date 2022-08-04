/*import  path  from 'path';
import nodeExternals from 'webpack-node-externals';*/

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require('webpack'); // remember to require this, because we DefinePlugin is a webpack plugin

module.exports = {
  entry: "./server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
    globalObject: "this",
  },
  resolve: {
    extensions: [".js", ".json", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$|jsx$|tsx/,
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [],
};
