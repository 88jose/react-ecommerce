import videoOne from '../../../assets/videos/girlskate.mp4';
import videoTwo from '../../../assets/videos/skatepark.mp4';
import './SectionVideos.css';

export const SectionVideos = () => {
   return (
      <div className='container-fluid section-videos'>
         <div className="row">
            <div className="col-md-6 view">
               <span className='span-view'>VIEW</span>
            </div>
            <div className="col-md-6 videoOne">
               <video src={ videoOne } autoPlay loop muted></video>
            </div>
         </div>
         <div className="row video-span">
            <div className="col-md-4 videoTwo">
               <video src={ videoTwo } autoPlay loop muted></video>
            </div>
            <div className="col-md-8 skateboard">
               <span className='span-skateboard'>SKATEBOARD</span>
            </div>
         </div>
      </div>
   )

}
