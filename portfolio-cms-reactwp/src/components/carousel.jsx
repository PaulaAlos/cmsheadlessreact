
import { useState } from 'react';
import PropTypes from 'prop-types';
import './carousel.css';

function Carousel(props){

  Carousel.propTypes = {
    proyectos: PropTypes.array.isRequired,
  }
  
  const { proyectos } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = proyectos.length;
  
  const nextSlide = () => {
    const imageSlides = document.getElementsByClassName("carousel__img");
    let newIndex = (activeIndex === totalImages - 1 ? 0 : activeIndex + 1);

    imageSlides[activeIndex].className = "carousel__img rightOut";
    imageSlides[newIndex].className= "carousel__img rightIn ";

    setActiveIndex((currentIndex) =>
      currentIndex === totalImages - 1 ? 0 : currentIndex + 1
    );
  };
  
  const prevSlide = () => {
    const imageSlides = document.getElementsByClassName("carousel__img");
    let newIndex = (activeIndex === 0 ? totalImages - 1 : activeIndex - 1);

    imageSlides[newIndex].className = "carousel__img leftIn ";
    imageSlides[activeIndex].className= "carousel__img leftOut";
    
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? totalImages - 1 : currentIndex - 1
    );
  };

  let proyecto = proyectos[activeIndex]
  let title = proyectos[activeIndex].title;

  return (
    <div className='carousel-wrap'>      
      <div className="carousel"> 
          {
            proyectos.map((proyecto, i) => (    
                <img key={'img-carousel-'+i}
                  style={ (activeIndex === i) ? { transform:"translateX(0%)" } : {  transform:"translateX(50%)" }}
                  src={proyecto.srcUrl}
                  alt={`Slide ${i}`}
                  className={ (0 === i) ? 'carousel__img rightIn'  : 'carousel__img '}
                  />   
            ))
          }
      </div>
      <div className='carousel-text-wrap'>
        <h1 className='carousel-title '>{title}</h1>
        <p className='carousel-desc' dangerouslySetInnerHTML={{__html: proyecto.content.rendered}}></p> 
        <div className='carousel-btn-wrap'>
          <button onClick={prevSlide} className="carousel__btn carousel__btn--prev ">
            &#8592;
          </button>
          <button id='btn-next' onClick={nextSlide} className="carousel__btn carousel__btn--next">
            &#8594;
          </button>
        </div> 
      </div>       
    </div>
  );
}
export default Carousel;
