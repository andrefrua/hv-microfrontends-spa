// development config
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./common");

module.exports = (env, argv) =>
  merge(
    {
      mode: "development",
      entry: [
        `webpack-dev-server/client?http://localhost:${process.env.SERVICE_PORT}`, // bundle the client for webpack-dev-server and connect to the provided endpoint
        "webpack/hot/only-dev-server" // bundle the client for hot reloading, only- means to only hot reload for successful updates
      ],
      devtool: "eval-source-map",
      plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
      ],
      devServer: {
        hot: true, // enable HMR on the server,
        historyApiFallback: true,
        host: process.env.SERVICE_HOST,
        port: process.env.SERVICE_PORT,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    },
    common(argv)
  );
