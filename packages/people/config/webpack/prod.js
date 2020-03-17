// production config
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./common");

module.exports = merge(common, {
  mode: "production",
  entry: "./index.standalone.js",
  output: {
    path: `${process.cwd()}/build`,
    filename: "js/bundle.[hash].min.js"
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: `${process.cwd()}/public/index.html`
    })
  ]
});
