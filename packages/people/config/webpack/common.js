const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  },
  context: `${process.cwd()}/src`,
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
  plugins: [
    new CleanWebpackPlugin(),
    new UnusedFilesWebpackPlugin({
      globOptions: {
        cwd: `${process.cwd()}/src`
      }
    })
  ],
  externals: ["react", "react-dom", "single-spa", new RegExp(`^@hv-mf/`)]
};
