import React, { useState, useContext } from "react";

const cartContext = React.createContext();
const setCartContext = React.createContext();

export function useCartContext() {
  return useContext(cartContext);
}

export function useSetCartContext() {
  return useContext(setCartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      category: {
        id: "5c29f0f0-a40a-4cea-abe3-8109d02eb1fe",
        name: "sudaderas",
      },
      id: "899218c0-2822-469d-9d06-9f5ba90744ba",
      imgUrl:
        "https://leeos-merch.storage.googleapis.com/media/images/MADKAT_NOV23_FCKTHERATZ_Cre.2e16d0ba.fill-1200x1400-c100.jpg",
      isActive: true,
      name: "MadKat Worldtour - Sudadera",
      price: "39.99",
      stock: 150,
    },
  ]);

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
