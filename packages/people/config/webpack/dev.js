// development config
const path = require("path");
const dotenv = require("dotenv").config().parsed;
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./common");

module.exports = (env, argvs) =>
  merge(common, {
    mode: "development",
    entry: [
      `webpack-dev-server/client?http://localhost:${process.env.SERVICE_PORT}`, // bundle the client for webpack-dev-server and connect to the provided endpoint
      "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
      path.resolve(process.cwd(), `src/index.js`) // the entry point of our app
    ],
    output: {
      filename: "main.js",
      libraryTarget: "system",
      path: path.resolve(process.cwd(), "dist")
    },
    devtool: "eval-source-map",
    devServer: {
      hot: true, // enable HMR on the server,
      historyApiFallback: true,
      host: process.env.SERVICE_HOST,
      port: process.env.SERVICE_PORT,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.standalone": JSON.stringify(argvs.standalone)
      }),
      new webpack.HotModuleReplacementPlugin(), // enable HMR globally
      new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
      new HtmlWebpackPlugin({
        inject: true,
        template: `${process.cwd()}/public/index.ejs`
      })
    ],
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  });
