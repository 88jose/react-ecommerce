import { UserContextProvider } from './context/User/UserContext';
import { CartProvider } from './context/Cart/CartContext';
import { WhisListProvider } from './context/WhisList/WhisListContext';
import { WebRouter } from './routes/WebRouter';
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
