import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { ProductDetail } from '../ProductDetail/ProductDetail';

export const ProductDetailContainer = () => {
  const url = "http://localhost:3004/products";
  const [products, setProducts] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch(url);
        const json = await response.json()

        if(detalleId){
            const filteredProducts = json.find(products => products.id === parseInt(detalleId));
            setProducts(filteredProducts)
        }else{
            setProducts(json)
        }
    }
    fetchProducts();
}, [detalleId])
  

  return (
    <div className="container-detail">
      <ProductDetail key={ products.id } product={ products }/>        
    </div>
  )
  
}
