import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../../context/User/UserContext"; 

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
      <div>
         <h1>Login</h1>
         <form onSubmit={ handleSubmit }>
            <label>Username:</label>
            <input type="text" value={ username } onChange={ (event) => setUsername(event.target.value) } />
            <label>Password:</label>
            <input type="password" value={ password } onChange={ (event) => setPassword(event.target.value) } />
            <button type="submit">Login</button>
         </form>
      </div>
   )
}
