const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv").config().parsed;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

module.exports = argv => ({
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ["file-loader?name=[name].[ext]"]
      },
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  entry: path.resolve(process.cwd(), `src/config.js`),
  output: {
    filename: "main.js",
    libraryTarget: "system"
  },
  plugins: [
    new UnusedFilesWebpackPlugin({
      globOptions: {
        cwd: `${process.cwd()}/src`
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${process.cwd()}/public/index.ejs`
    })
  ],
  externals: ["react", "react-dom", "single-spa", new RegExp(`^@hv-micro/`)]
});
