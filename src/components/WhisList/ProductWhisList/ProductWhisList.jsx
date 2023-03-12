import { Link, useSearchParams } from 'react-router-dom';
import { useWhisListContext } from '../../context/WhisList/WhisListContext'; 
import { ProductWhis } from '../ProductWhis/ProductWhis';
import iconHeart from '../../../assets/icons/heart.png';
import './ProductList.css';

export const ProductWhisList = () => {
    const { whis } = useWhisListContext();
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('q') ?? '';

    const handleInput = ({target}) => {
        const {value} = target
        setSearchParams({q : value})
    } 

    if(whis.length === 0){
        return(
            <div className='section-noWish'>
                <div className='parrafo-heart'>
                    <p>Give love to the products</p>
                    <img src={iconHeart} alt="icon heart" width="30" height="27"/>
                </div>
                <div className='link-explore'>
                    <Link to='/shop'>Explore articles</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="input-search">
                <input type="search" value={ query } name="filter" placeholder="Search" onChange={ handleInput }/>
            </div>
            <div className="layaout-product-shop">
                { whis
                .filter(({ name }) => {
                    if(!query) return true
                    else {
                        const nameLowerCase = name.toLowerCase()
                        return nameLowerCase.includes(query.toLowerCase())
                    }
                })
                .map((product) => {
                    return (
                        <ProductWhis key={ product.id } product={ product } />
                        )
                    })
                }
            </div>
        </>
    )

}