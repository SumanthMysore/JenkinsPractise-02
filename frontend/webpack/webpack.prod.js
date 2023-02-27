const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  devServer: {
    hot: true,
    open: true,
    allowedHosts: "all",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("BC67-prod"),
    }),
  ],
}