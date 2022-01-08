import { mount as productsMount } from "products/ProductsIndex"; // It points to remotes field from ModuleFederationPlugin config in webpack config
import { mount as cartMount } from "cart/CartShow"; // It points to remotes field from ModuleFederationPlugin config in webpack config

console.log("Container!");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
