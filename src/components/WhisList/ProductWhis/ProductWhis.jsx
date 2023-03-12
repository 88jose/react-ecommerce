import { useState } from "react";
import { Link } from "react-router-dom";
import { useWhisListContext } from "../../../context/WhisList/WhisListContext"; 
import iconHeart1 from '../../../assets/icons/heart.png';
import iconHeart2 from '../../../assets/icons/heart2.png';

export const ProductWhis = ({ product }) => {
   const { addWhis, isInWhisList, removeWhis  } = useWhisListContext();
   const [isInList, setIsInList] = useState(isInWhisList(product.id));

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
         <span className="category-product-card">{ product.category }</span>
         <Link to={ `detail/${ product.id }` } >
            <img src={ product.url } alt={ product.name } className="img-product-card" />
            <h2 className="tittle-product-card">{ product.name }</h2>
         </Link>
         <div className="pirce-add-product-card">
            <p className="price-product-card">{ product.price } €</p>
            <button className="button-heart" onClick={ handleToggle }>
               {!isInList 
                  ? <img src={ iconHeart2 } alt="icon heart" width="30"/> 
                  : <img src={ iconHeart1 } alt="icon heart" width="30"/> 
               } 
            </button>           
         </div>         
      </div>
   );

}
