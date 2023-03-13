import { useState } from 'react';
import iconAdd from "../../../assets/icons/add-bl.png";

export const Counter = ({ onAdd }) => {
   const [count, setCount] = useState(1);

   const decrease = () =>{
      setCount((prevState) => prevState - 1);
   }

   const increase = () =>{
      setCount((prevState) => prevState + 1);
   }

   return (
      <div className='counter'>
         <button disabled={ count <= 0 } className="button-counter" onClick={ decrease }>
            <span> - </span>
         </button>
         <span className='number-counter'>{ count }</span>
         <button className="button-counter" onClick={ increase }>
            <span> + </span>
         </button>
         <div>
            <button onClick={ () => onAdd(count) } className='btn-add-detail'>
               <span className="span-add"> Add to cart </span>
               <img src={ iconAdd } alt="icon add" width="20" className="icon-add-card"/>
            </button>
         </div>
      </div>
   )

}
