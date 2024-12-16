import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} - ${item.price} x {item.quantity}
              <input
                type="number"
                min="1"
                value={item.quantity}
                style={{ marginLeft: "10px", width: "50px" }}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
              />
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
