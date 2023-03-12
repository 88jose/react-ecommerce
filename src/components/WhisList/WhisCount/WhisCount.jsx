import { useWhisListContext } from '../../../context/WhisList/WhisListContext'; 
import './WhisCount.css';

export const WhisCount = () => {
   const { getTotalWhis } = useWhisListContext();
   
   return (
      <span className="count-heart">{ getTotalWhis() || '0' }</span>
   ) 

}
