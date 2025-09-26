import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = {};
    sizes.forEach((size) => {
      cart[product.id][size] = 0;
    });
  });
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [searchTerm, setSearchTerm] = useState(""); 

  const addToCart = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: prev[itemId][size] + 1,
      },
    }));
  };

  const removeFromCart = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: Math.max(prev[itemId][size] - 1, 0),
      },
    }));
  };

  const getTotalQuantity = (itemId) => {
    return Object.values(cartItems[itemId]).reduce((sum, qty) => sum + qty, 0);
  };

  const filteredProducts = all_product.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalQuantity,
    searchTerm,
    setSearchTerm, 
    filteredProducts,
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
