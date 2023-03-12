import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/Cart/CartContext'; 
import { ProductCart } from '../../components/Shop/ProductCart/ProductCart'; 
import './CartPage.css';

export const CartPage = () => {
   const { cart, getTotalPrice } = useCartContext();

   if(cart.length === 0){
      return(
         <div className='section-noWish__cart'>
            <div className='parrafo-heart'>
               <p> The cart is empty </p>
            </div>
            <div className='link-explore'>
               <Link to='/shop'> Explore articles </Link>
            </div>
         </div>
         )
   }

   return (
      <div className='section-listCart'>
         { cart.map(product => <ProductCart key={ product.id } product={ product }/>) }
         <div className="total">
            <p className='total-cart'>Total: <span>{ getTotalPrice() } €</span></p> 
         </div>
      </div>
   )

}
