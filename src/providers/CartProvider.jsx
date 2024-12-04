import React, { useState, useContext, useEffect } from "react";

const cartContext = React.createContext();
const setCartContext = React.createContext();

export function useCartContext() {
  return useContext(cartContext);
}

export function useSetCartContext() {
  return useContext(setCartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={cart}>
      <setCartContext.Provider value={{ addToCart, removeFromCart, clearCart }}>
        {children}
      </setCartContext.Provider>
    </cartContext.Provider>
  );
}
