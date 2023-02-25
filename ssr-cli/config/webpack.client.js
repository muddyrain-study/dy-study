const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: {
    client: path.resolve(__dirname, "../src/entry/client.entry.js"),
  },
  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};
module.exports = merge(base, config);
