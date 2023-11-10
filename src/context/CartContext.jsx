import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const storedCart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(storedCart);
    } else {
      setCart([]);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
