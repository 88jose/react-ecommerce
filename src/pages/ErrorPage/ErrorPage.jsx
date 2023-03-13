import { Link } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = () => {
   return (
      <div className='container-fluid page-404'>
         <div className="row">
            <h1 className="col-md-9 tittle-page-error"> PAGE NOT FOUND </h1>
         </div>
         <div className="not-found">
            <h3 className='title-error'> Error 404 </h3>
            <Link to='/'> Back to Home </Link>
         </div>
      </div>
   )

}

