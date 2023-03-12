import { createContext, useContext, useState, useMemo, useCallback } from 'react';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
   const [isUserAuthenticated, setIsUserAuthenticated] = useState(
      JSON.parse(localStorage.getItem("User")) ?? false
      );
   
   const login = useCallback (function(){
      localStorage.setItem("User", JSON.stringify(true));
      setIsUserAuthenticated(true);
   }, []);
   
   const logout = useCallback (function(){
      setIsUserAuthenticated(false);
      localStorage.removeItem("User");
   }, []);

   const value = useMemo (
      () => ({
         login,
         logout,
         isUserAuthenticated
   }), [login, logout, isUserAuthenticated]);

   return (
      <UserContext.Provider value={ value }>
         { children }
      </UserContext.Provider>
   )

}

