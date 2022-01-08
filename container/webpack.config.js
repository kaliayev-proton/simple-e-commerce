const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: "8080",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
        cart: "cart@http://localhost:8082/remoteEntry.js", // the cart@... must match, be the same key that is used as "name" field in the webpack config of cart micro
        // the container will search a variable called "cart"
        // esto crea un bug que básdicamente consiste en que no podemos tener ningún elemento en nuestro DOM con un id igual al de uno de los micros,
        // es decir, no podemos tener un div con un id que sea igual al campo "name" de uno de los micros
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
