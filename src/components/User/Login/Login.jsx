import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../../context/User/UserContext"; 
import './Login.css';

export const Login = () => {
   const { login } = useUserContext();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();


   function handleSubmit(event){
      event.preventDefault();

      if(username === "Jose" && password === "123"){
         login();
         navigate('/private');
      }
   }

   return (
      <div className="section-login">
         <h1>Login</h1>
         <form onSubmit={ handleSubmit }>
            <input type="text" value={ username } placeholder="Username:" onChange={ (event) => setUsername(event.target.value) } />
            <input type="password" value={ password } placeholder="Password:" onChange={ (event) => setPassword(event.target.value) } />
            <button type="submit">
               <span>Login</span>
            </button>
         </form>
      </div>
   )
}
