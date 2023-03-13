import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/User/UserContext'; 

export const PrivateRoute = () => {
   const { isUserAuthenticated } = useUserContext();

   if(!isUserAuthenticated) {
      return <Navigate to='/login' replace={ true }/>
   }

   return <Outlet />
   
}

