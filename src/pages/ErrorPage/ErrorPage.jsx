import { Link } from 'react-router-dom';
import ImgRotateA from "../../assets/pictures/img_rotate_f.png";
import ImgRotateB from "../../assets/pictures/img_rotate_b.png";
import './ErrorPage.css';

export const ErrorPage = () => {
   return (
      <div className='container-fluid page-404'>
         <div className="row">
            <h1 className="col-md-9 tittle-page"> PAGE NOT FOUND </h1>
            <h3 className='col-md-3'> Error 404 </h3>
         </div>
         <div className='row container-rotate'>
            <div className="col-md-12 card-rotate">
               <div className="face-rotate">
                  <img className='img-rotate' src={ ImgRotateA } alt="skateboard" />
               </div>
               <div className="back-rotate">
                  <img className='img-rotate' src={ ImgRotateB } alt="skateboard" />
               </div>
            </div>
         </div>
         <Link to='/'> Back to Home </Link>
      </div>
   )

}

