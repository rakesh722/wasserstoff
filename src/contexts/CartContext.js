// contexts/CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += action.payload.quantity || 1;
        return updatedCart;
      } else {
        
        return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }

    case 'REMOVE_FROM_CART':
      
      return state.filter(item => item.id !== action.payload.id);

    case 'UPDATE_QUANTITY':
      
      const updatedCart = state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return updatedCart;

    case 'CLEAR_CART':
      
      return [];

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


