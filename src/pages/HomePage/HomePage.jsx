import { HeaderHome } from '../../components/Home/HeaderHome/HeaderHome';
import { SectionTitle } from '../../components/Home/SectionTitle/SectionTitle';
import { SectionCategories } from '../../components/Home/SectionCategories/SectionCategories';
import { Banner } from '../../components/Home/Banner/Banner';
import { SectionVideos } from '../../components/Home/SectionVideos/SectionVideos';
import { Partners } from '../../components/Home/Partners/Partners';

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
