import { HeaderHome } from '../../Home/HeaderHome/HeaderHome';
import { SectionTitle } from '../../Home/SectionTitle/SectionTitle';
import { SectionCategories } from '../../Home/SectionCategories/SectionCategories';
import { Banner } from '../../Home/Banner/Banner';
import { SectionVideos } from '../../Home/SectionVideos/SectionVideos';
import { Partners } from '../../Home/Partners/Partners';

export const HomePage = () => {
   return (
      <>
         <HeaderHome />
         <SectionTitle />
         <SectionCategories />
         <Banner />
         <SectionVideos />
         <Partners />
      </>
   )

}
