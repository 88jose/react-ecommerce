import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Counter } from '../Counter/Counter';
import { useCartContext } from '../../../context/Cart/CartContext'; 
import './ProductDetail.css';

export const ProductDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(product, quantity);
  }

  return (
      <div className='section-detail'>
        <div className="container-info">
          <img src={ product.url } alt={product.name} />
          <div className='info-product'>
            <h1>{ product.name }</h1>
            <p>{ product.description }</p>
          </div>
        </div>
        { goToCart
            ? <div className='link-finish'>
                <NavLink to='/cart' className='finish'>Finish</NavLink>
                <NavLink to='/shop' className='continue'>Continue Shop</NavLink>
              </div>
            : <Counter onAdd={ onAdd }/>
        }
        
      </div>
  )

}
