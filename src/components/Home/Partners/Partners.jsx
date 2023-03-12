import { Link } from 'react-router-dom';
import imgPart1 from '../../../assets/img_partners/logo-element.png';
import imgPart2 from '../../../assets/img_partners/logo-sCruz.png';
import imgPart3 from '../../../assets/img_partners/logo-vans.png';
import imgPart4 from '../../../assets/img_partners/logo-volcom.png';
import imgPart5 from '../../../assets/img_partners/logo-etnies.png';
import imgPart6 from '../../../assets/img_partners/logo-dc.png';
import imgPart7 from '../../../assets/img_partners/logo-thras.png';
import imgPart8 from '../../../assets/img_partners/logo-inde.png';
import './Partners.css';

export const Partners = () => {
   return (
      <div className='section-partners'>
         <h2>Partners</h2>
         <div className="row partners">
         <div className='logo-partner'>
            <Link to="https://www.elementbrand.es/" target='_blank'>
               <img src={ imgPart1 } alt="element" />
            </Link>
         </div>
         <div className='logo-partner'>
            <Link to="https://santacruzskateboards.com/" target='_blank'>
               <img src={ imgPart2 } alt="santa cruz" />
            </Link>
         </div>
         <div className='logo-partner'>
            <Link to="https://www.vans.es/" target='_blank'>
               <img src={ imgPart3 } alt="vans" />
            </Link>
         </div>
         <div className='logo-partner'>
            <Link to="https://www.volcom.es/" target='_blank'>
               <img src={ imgPart4 } alt="volcom" />
            </Link>
         </div>
         </div>
         <div className="row partners">
         <div className='logo-partner'>
            <Link to="https://eu.etnies.com/" target='_blank'>
               <img src={ imgPart5 } alt="etnies" />
            </Link>
         </div>
         <div className='logo-partner'>
            <Link to="https://www.dcshoes.es/" target='_blank'>
               <img src={ imgPart6 } alt="dc shoes" />
            </Link>
         </div>
         <div className='logo-partner'>
            <Link to="https://www.thrashermagazine.com/" target='_blank'>
               <img src={ imgPart7 } alt="thrasher magazine" />
            </Link>
         </div>
         <div className='logo-partner'>
            <Link to="https://independenttrucks.com/" target='_blank'>
               <img src={ imgPart8 } alt="independent" />
            </Link>
         </div>
         </div>
      </div>
   )

}
