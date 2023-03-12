import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../ui/NavBar/NavBar';
import { HomePage } from '../pages/HomePage/HomePage';
import { ShopPage } from '../pages/ShopPage/ShopPage';
import { ProductDetailContainer } from '../Shop/ProductDetailContainer/ProductDetailContainer';
import { CartPage } from '../pages/CartPage/CartPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { Private } from '../User/Private/Private';
import { Footer } from '../ui/Footer/Footer';

export const WebRouter = () => {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route index element={ <HomePage /> }/>
            <Route path='/shop' element={ <ShopPage /> }/>
            <Route path='/shop/:categoryId' element={ <ShopPage /> } />
            <Route path='/shop/detail/:detalleId' element={< ProductDetailContainer /> } />
            <Route path='/shop/:categoryId/detail/:detalleId' element={ <ProductDetailContainer /> } />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={ <ErrorPage /> }/>
            <Route path='/login' element={ <LoginPage /> }/>
            <Route path='/private' element={<PrivateRoute />}>
               <Route index element={ <Private /> }/>
            </Route> 
         </Routes>
         <Footer />
      </BrowserRouter>

   )

}
