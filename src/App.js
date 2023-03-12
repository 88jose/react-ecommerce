import { CartProvider } from './components/context/Cart/CartContext';
import { UserContextProvider } from './components/context/User/UserContext';
import { WhisListProvider } from './components/context/WhisList/WhisListContext';
import { WebRouter } from './components/routes/WebRouter';
import './index.css';

function App() {
   return (
      <UserContextProvider>
         <CartProvider>
            <WhisListProvider>
               <WebRouter />
            </WhisListProvider>
         </CartProvider>
      </UserContextProvider>
   )
   
}

export default App;
