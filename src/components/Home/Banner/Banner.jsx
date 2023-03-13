import './Banner.css';

export const Banner = () => {
   const paragraphs = [];

   for (let i = 0; i < 10; i++) {
      paragraphs.push(<span className="scrolling-text" key={ i }> SKATE WORLD * </span>);
   }

   return (
      <div className='section-banner'>
         <h2 className="scrolling-text-container">{ paragraphs }</h2>
      </div>
   )

}
