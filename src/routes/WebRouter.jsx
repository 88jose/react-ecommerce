import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/ui/NavBar/NavBar'; 
import { HomePage } from '../pages/HomePage/HomePage';
import { ShopPage } from '../pages/ShopPage/ShopPage';
import { ProductDetailContainer } from '../components/Shop/ProductDetailContainer/ProductDetailContainer';
import { CartPage } from '../pages/CartPage/CartPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { Private } from '../components/User/Private/Private';
import { Footer } from '../components/ui/Footer/Footer';

export const WebRouter = () => {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route index element={ <HomePage /> }/>
            <Route path='/shop' element={ <ShopPage /> }/>
            <Route path='/shop/:categoryId' element={ <ShopPage /> } />
            <Route path='/shop/detail/:detalleId' element={<ProductDetailContainer /> } />
            <Route path='/shop/:categoryId/detail/:detalleId' element={ <ProductDetailContainer /> } />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/cart/detail/:detalleId' element={<ProductDetailContainer />} />
            <Route path='*' element={ <ErrorPage /> }/>
            <Route path='/login' element={ <LoginPage /> }/>
            <Route path='/private' element={<PrivateRoute />}>
               <Route index element={ <Private /> }/>
               <Route path='/private/detail/:detalleId' element={<ProductDetailContainer />} />
            </Route> 
         </Routes>
         <Footer />
      </BrowserRouter>
   )

}
