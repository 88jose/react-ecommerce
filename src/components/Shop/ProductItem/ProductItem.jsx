import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/Cart/CartContext"; 
import { useWhisListContext } from "../../../context/WhisList/WhisListContext";
import iconAdd from "../../../assets/icons/add-bl.png";
import iconHeart1 from '../../../assets/icons/heart.png';
import iconHeart2 from '../../../assets/icons/heart2.png';
import "./ProductItem.css";

export const ProductItem = ({ product }) =>{ 
   const { addProduct } = useCartContext();
   const { addWhis, isInWhisList, removeWhis  } = useWhisListContext();
   const [isInList, setIsInList] = useState(isInWhisList(product.id));

   const handleAddToCart = () => {
      addProduct(product, 1);
   };

   const handleToggle = () => {
      if (isInList) {
         removeWhis(product.id);
      } else {
         addWhis(product, 1);
      }
      setIsInList(!isInList);
   };

   return (
      <div className="card-product">
            <div className="category-whis">
               <button className="button-heart" onClick={ handleToggle }>
                  {!isInList ? <img src={iconHeart2} alt="" width="30"/> : <img src={iconHeart1} alt="" width="30"/> } 
               </button>
               <span className="category-product-card">{ product.category }</span>
            </div>
         <Link to={ `detail/${ product.id }` } >
               <img src={ product.url } alt="" className="img-product-card" />
               <h2 className="tittle-product-card">{ product.name }</h2>
         </Link>
         <div className="pirce-add-product-card">
               <p className="price-product-card">{ product.price } €</p>
               <button className='button-add-cart' onClick={ handleAddToCart }>
                  <span className="span-add">Add</span>
                  <img src={ iconAdd } alt="" width="20" className="icon-add-card"/>
               </button>              
         </div>         
      </div>
   );

}



