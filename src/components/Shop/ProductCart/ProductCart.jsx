import { useCartContext } from '../../context/Cart/CartContext';
import './ProductCart.css';

export const ProductCart = ({ product }) => {
   const { removeProduct } = useCartContext();

   return (
      <div className='section-productCart'>
         <div className='img-cart'>
            <img src={ product.url } alt={ product.name } />
         </div>
         <div className="container-infoCart">
            <div className="info-cart">
               <div className="title-cart">
                  <p>{ product.category }</p>
                  <h3>{ product.name }</h3>
               </div>
               <div className="price-cart">
                  <p>Price: { product.price } €</p>
                  <p>Quantity: { product.quantity } und.</p>
                  <p>Subtotal: {product.quantity * product.price } €</p>
               </div>
            </div>
            <div>
               <button className='btn-deleteCart' onClick={ ()=>removeProduct(product.id) }>x</button> 
            </div>
         </div>
      </div>
   )

}
