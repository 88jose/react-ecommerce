import { NavLink } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import imgSkateCategory from '../../../assets/pictures/skateboard.jpg';
import imgWheelsCategory from '../../../assets/pictures/wheels.jpg';
import './SectionCategories.css';

export const SectionCategories = () => {
   return (
      <div className='container-fulid'>
         <div className="row section-categories">
         <div className="col-md-3 category-skaterboards">
            <NavLink to='/shop/skateboard'>
               <article>
                  <figure>
                     <img src={ imgSkateCategory } alt="skateboard" className='img-skateCategory'/>
                  </figure>
                  <main>
                     <h3>Skateboards</h3>
                  </main>
               </article>
            </NavLink>
         </div>
         <div className="col-md-5 category-wheels">
            <NavLink to='/shop/wheels'>
               <article>
                  <figure>
                     <img src={ imgWheelsCategory } alt="wheels" className='img-wheelCategory'/>
                  </figure>
                  <main>
                     <h3>Skateboard Wheels</h3>
                  </main>
               </article>
            </NavLink>
         </div>
         <div className="col-md-3">
            <Button subtittleLink="Shop" tittleLink="View All Products" newClassName="btn-shop-category" newToLinkButton='/shop'/>
         </div>
         </div>
      </div>
   )

}
