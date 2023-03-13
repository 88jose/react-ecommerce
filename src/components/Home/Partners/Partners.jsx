import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Partners.css';

export const Partners = () => {
   const url = "http://localhost:3004/partners";
   const [partners, setPartners] = useState([]);

   useEffect(() => {
      const fetchPartners = async () => {
         const response = await fetch(url);
         const json = await response.json();
            
         return setPartners(json);
      }
      fetchPartners();
   }, []);

   return (
      <div className='section-partners'>
         <h2> Partners </h2>
         <div className="row partners">
            { partners.map(({ id, name, img, link }) => {
               return(
                  <div className='logo-partner' key={ id }>
                     <Link to={ link } target='_blank'>
                        <img src={ img } alt={ name } />
                     </Link>
                  </div>
                  )
               })
            }
         </div>
      </div>
   )

}
