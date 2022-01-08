const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/bootstrap",
      },
      shared: ["faker"], // dato que se está utilizando tambiŕen en el micro de products de este modo sólo se pedirá una vez en cada recarga
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
