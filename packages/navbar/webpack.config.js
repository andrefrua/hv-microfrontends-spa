const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(process.cwd(), `src/index.js`),
  output: {
    filename: "main.js",
    libraryTarget: "system",
    path: path.resolve(process.cwd(), "dist")
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "sourcemap",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  externals: ["react", "react-dom", "single-spa", new RegExp(`^@hv-mf/`)],
  plugins: [
    new CleanWebpackPlugin(),
    new UnusedFilesWebpackPlugin({
      globOptions: {
        cwd: path.resolve(process.cwd(), "src"),
        ignore: [
          "**/*.test.js",
          "**/*.spec.js",
          "**/*.js.snap",
          "**/test-setup.js"
        ]
      }
    })
  ]
};
