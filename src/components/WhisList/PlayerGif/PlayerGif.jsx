import { Player } from '@lottiefiles/react-lottie-player';

export const PlayerGif = () => {
      return (
         <div>
               <Player
                  src='https://lottie.host/26fffd3b-84eb-4754-84c2-2e464df33fec/lsxzs5ilJz.json'
                  className="player"
                  loop
                  autoplay
                  style={{ height: '700px', width: '700px' }}
               />
         </div>
      )

}
