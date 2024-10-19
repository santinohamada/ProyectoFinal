import React, { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (room) => {
    setCart([room]);
  };
  const removeFromCart = (room) => {
    setCart((prevCart) => prevCart.filter((item) => room.id !== item.id));
  };
  const checkElementCart = (room) => {
    if (cart.find((item) => item.id === room.id) !== undefined) return true;
    return false;
  };
  const clearCart = (room) => {
    setCart([]);
  };
  return { cart, addToCart, removeFromCart, checkElementCart, clearCart };
};
export default useCart;
