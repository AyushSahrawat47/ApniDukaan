// context api for cart to avoid prop drilling

import React, {createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    // this state will be used to store selective products that should be displayed in the cart
    const [cartItems, setCartItems] = useState([]);

    // as the name suggests this function will keep the already stored products and store the new one 
    const addToCart = (product) =>{
        setCartItems((prevItems)=>[
          ...prevItems,
          product
        ]
        )
    }
    // this function will remove the product from the cart
    const removeFromCart = (product) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
    }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

