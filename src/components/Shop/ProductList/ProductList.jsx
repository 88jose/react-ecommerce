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
    
    const handleInput = ({ target }) => {
        const { value } = target
        setSearchParams({ q : value })
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
                <div className="input-wraper">
                    <input type="search" value={ query } name="filter" placeholder="Search" onChange={ handleInput }/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
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