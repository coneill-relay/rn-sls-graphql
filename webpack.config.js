const path = require("path");
const slsw = require("serverless-webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  target: "node",
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  externals: ["couchbase"],
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
    ],
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, ".webpack"),
    filename: "[name].js",
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
