// pages/Checkout.js

import React from 'react';
import { useCart } from '../contexts/CartContext';

const Checkout = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const updateQuantity = (productId, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: newQuantity } });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {/* Display cart items */}
        {cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price} per item</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
            />
          </div>
        ))}
      </div>
      <div>
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
        {/* Add a button to proceed with the checkout process */}
      </div>
    </div>
  );
};

export default Checkout;


