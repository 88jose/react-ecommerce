import { useParams } from 'react-router';
import { Button } from "../../ui/Button/Button";
import imgShop from '../../../assets/pictures/header_shop.jpg';
import imgSkateboard from '../../../assets/pictures/header_skateboard.jpg';
import imgWheels from '../../../assets/pictures/header_wheels.jpg';

import "./HeaderShop.css";

export const HeaderShop = ({ tittlePage }) => {
   const { categoryId } = useParams();

   function getTitleFromPathname(categoryId) {
      switch (categoryId) {
      case 'skateboard':
         return 'SKATEBOARDS';
      case 'wheels':
         return 'WHEELS';
      default:
         return 'SHOP';
      }
   }

   function getImgFromPathname(categoryId) {
      switch (categoryId) {
         case 'skateboard':
            return imgSkateboard;
         case 'wheels':
            return imgWheels;
         default:
            return imgShop;
      }
   }

   function getSubTitleButFromPathname(categoryId) {
      switch (categoryId) {
         case 'skateboard':
            return "Shop";
         case 'wheels':
            return "Shop";
         default:
            return "Home";
      }
   }

   function getTitleButFromPathname(categoryId) {
      switch (categoryId) {
         case 'skateboard':
            return "View All Products";
         case 'wheels':
            return "View All Products";
         default:
            return "Back to home";
      }
   }

   function getLinkFromPathname(categoryId) {
      switch (categoryId) {
         case 'skateboard':
            return "/shop";
         case 'wheels':
            return "/shop";
         default:
            return "/";
      }
   }

   return (

      <div className="header-shop">
            <div className="contain-tittle">
               <h1 className="tittle-page">{ getTitleFromPathname(categoryId) }</h1>
               <Button 
                  subtittleLink={getSubTitleButFromPathname(categoryId)} 
                  tittleLink={getTitleButFromPathname(categoryId)} 
                  newToLinkButton={getLinkFromPathname(categoryId)}
               />
            </div>
            <img src={getImgFromPathname(categoryId)} alt="" />
      </div>
   );

}
