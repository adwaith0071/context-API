import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
