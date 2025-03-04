import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { CartProvider } from "./context/cartContext.js";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
