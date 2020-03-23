// production config
const path = require("path");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./common");

module.exports = (env, argv) =>
  merge(
    {
      mode: "production",
      output: {
        path: path.resolve(process.cwd(), "build")
      },
      devtool: "source-map",
      plugins: [new CleanWebpackPlugin()]
    },
    common(argv)
  );
