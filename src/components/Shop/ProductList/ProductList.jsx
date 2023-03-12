import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductList.css';

export const ProductList = () => {
    const url = "http://localhost:3004/products";
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('q') ?? '';
    
    const handleInput = ({target}) => {
        const {value} = target
        setSearchParams({q : value})
    } 

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(url);
            const json = await response.json();
    
            if(categoryId){
                const filteredProducts = json.filter(products => products.category === categoryId);
                setProducts(filteredProducts);
            }else{
                setProducts(json);
            }
        }
        fetchProducts();
    }, [categoryId]);


    return (
        <>
            <div className="input-search">
                <input type="search" value={ query } name="filter" placeholder="Search" onChange={ handleInput }/>
            </div>
            <div className="layaout-product-shop">
                { products
                .filter(({ name }) => {
                    if(!query) return true
                    else {
                        const nameLowerCase = name.toLowerCase()
                        return nameLowerCase.includes(query.toLowerCase())
                    }
                })
                .map((product) => {
                        return (
                            <ProductItem key={ product.id } product={ product } />
                        )
                    })
                }
            </div>
        </>
    )

}