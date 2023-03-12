import React, { createContext, useContext, useEffect, useState } from "react";

const WhisListContext = createContext([]);
export const useWhisListContext = () => useContext(WhisListContext);

export const WhisListProvider = ({ children }) => {
   const [whis, setWhis] = useState(JSON.parse(localStorage.getItem("myWhisList")) || []);
   
   const addNewWhis = (item, quantity) => {
      const existingWhis = whis.find((whisItem) => whisItem.id === item.id);
      if (existingWhis) {
         console.log("El producto ya está en la lista de deseos"); //cabiar y retornar una aviso
         return;
      }
      setWhis([...whis, { ...item, quantity }]);
   };
   
   const updateWhisQuantity = (item, quantity) => {
      setWhis(
         whis.map((product) =>
            product.id === item.id ? { ...product, quantity : product.quantity + quantity } : product
         )
      );
   };

   const addWhis = (item, quantity) => {
      const existingWhis = whis.find((whisItem) => whisItem.id === item.id);
      if (existingWhis) {
         updateWhisQuantity(item, quantity);
      } else {
         addNewWhis(item, quantity);
      }
   };
   
   const clearWhisList = () => {
      setWhis([]);
      localStorage.removeItem("myWhisList");
   };

   const getTotalWhis = () =>
   whis.reduce((acumulator, currentWhis) => acumulator + currentWhis.quantity, 0);

   const isInWhisList = (id) => 
      whis.find((product) => product.id === id) ? true : false;

   const removeWhis = (id) =>
      setWhis(whis.filter((product) => product.id !== id));   

   useEffect(() => {
      localStorage.setItem("myWhisList", JSON.stringify(whis));
   }, [whis]);   
   
   return (
      <WhisListContext.Provider
         value={{
            addWhis,
            clearWhisList,
            getTotalWhis,
            isInWhisList,
            removeWhis,
            whis,
         }}
      >
         { children }
      </WhisListContext.Provider>
   )
}
