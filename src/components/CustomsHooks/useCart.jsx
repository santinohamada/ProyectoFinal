import React, { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (room) => {
    setCart([room]);
  };
  const removeFromCart = (room) => {
    setCart((prevCart) => prevCart.filter((item) => room._id !== item._id));
  };
  const checkElementCart = (room) => {
    if (cart.find((item) => item._id === room._id) !== undefined) return true;
    return false;
  };
  const clearCart = () => {
    setCart([]);
  };
  return {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    checkElementCart,
  };
};
export default useCart;
