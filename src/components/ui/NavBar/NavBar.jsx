import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/User/UserContext";
import { WhisCount } from "../../WhisList/WhisCount/WhisCount";
import { CartCount } from "../../Shop/CartCount/CartCount";
import logo from "../../../assets/icons/logo.svg";
import cart from "../../../assets/icons/cart.png";
import iconLogin from '../../../assets/icons/icon-login2.png';
import iconHeart from './../../../assets/icons/heart.png';
import "./NavBar.css";

export const NavBar = () => {
   const { isUserAuthenticated, logout } = useUserContext();
   const [isLoggedIn, setIsLoggedIn] = useState();

   const handleLogout = () => {
      logout(); 
      setIsLoggedIn(false);
   }

   useEffect(() => {
      if (isUserAuthenticated) {
         setIsLoggedIn(true);
      } else {
         setIsLoggedIn(false);
      }
   }, [isUserAuthenticated]);

   return (
      <>
         <nav className="nav">
            <NavLink to='/' className="nav-logo"><img src={ logo } alt="logo" /></NavLink>
            <div className="nav-links">
               <div className="link-shop">
                  <NavLink className="nav-item-shop" to='/shop'> SHOP </NavLink>
                  <NavLink className="nav-item-category" to='/shop/skateboard'> skateboard </NavLink>
                  <NavLink className="nav-item-category" to='/shop/wheels'> wheels </NavLink>
               </div>
               <NavLink className="nav-item" to='/cart'>
                  <img src={ cart } className="icon-cart" alt="icon cart" />
               </NavLink>
               <CartCount />
               {isLoggedIn 
                  ?  <>
                        <NavLink className="nav-item" to='/private'>
                           <img src={ iconHeart } className="icon-login" alt="icon cart" />
                        </NavLink>
                        <WhisCount />
                        <button className="nav-item" onClick={ handleLogout }> Logout </button>
                     </>
                  :  <>
                        <NavLink className="nav-item" to='/login'>
                           <img src={ iconLogin } className="icon-login" alt="icon cart" />
                        </NavLink>
                     </>
               }
            </div>
         </nav>
      </>
   )

}
