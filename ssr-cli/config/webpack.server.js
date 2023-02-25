const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: {
    server: path.resolve(__dirname, "../src/entry/server.entry.js"),
  },
  output: {
    libraryTarget: "commonjs2",
  },
  target: "node",
  plugins: [new VueSSRServerPlugin()],
};
module.exports = merge(base, config);
