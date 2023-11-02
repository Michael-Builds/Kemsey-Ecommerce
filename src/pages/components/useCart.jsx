// useCart.js (or useCart.jsx)
import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  return useContext(CartContext);
}
