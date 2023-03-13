import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState(
      JSON.parse(localStorage.getItem("myCart")) || []
   );
   
   const addNewProduct = (item, quantity) => { 
      setCart([...cart, { ...item, quantity }]) 
   };

   const updateProductQuantity = (item, quantity) => {
      setCart(
         cart.map((product) =>
            product.id === item.id ? { ...product, quantity : product.quantity + quantity } : product
         )
      );
   };

   const addProduct = (item, quantity) => {
      if (isInCart(item.id)) {
         updateProductQuantity(item, quantity);
      } else {
         addNewProduct(item, quantity);
      }
   };

   const clearCart = () => {
      setCart([]);
      localStorage.removeItem("myCart");
   };

   const getTotalPrice = () =>
      cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

   const getTotalProduct = () =>
      cart.reduce((acumulator, currentProduct) => acumulator + currentProduct.quantity, 0);

   const isInCart = (id) => 
      cart.find((product) => product.id === id) ? true : false;

   const removeProduct = (id) =>
      setCart(cart.filter((product) => product.id !== id));

   useEffect(() => {
      localStorage.setItem("myCart", JSON.stringify(cart));
   }, [cart]);

   return (
      <CartContext.Provider
         value={{
            addProduct,
            clearCart,
            getTotalPrice,
            getTotalProduct,
            isInCart,
            removeProduct,
            cart,
         }}
      >
         { children }
      </CartContext.Provider>
   )

}

