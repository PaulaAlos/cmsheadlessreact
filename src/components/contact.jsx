
import { Component } from 'react';
import './contact.css';
import ContactForm from './contact-form';

export class Intro extends Component {
    state = { 
        portada: [], 
        isLoaded: false,
        viewBox: '0 0 800 3000',
    }

    componentDidMount () {
        initSvg()
        /*---SCROLL SVG ANIMATION---*/
        function initSvg(){    
            
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animSvgIntro()                     
                    }else{
                        resetAnimSvgIntro()
                    }
                });
            });
                  
            observer.observe(document.querySelector('.contact-container'));
        }

        function animSvgIntro(){
            let circle1 = document.getElementById('contact-svg-circle')
            circle1.classList = "circle-svg animCircleShadow";

            let letterShadow = document.getElementById('letter-shadow')
            letterShadow.classList = "letter-shadow animLetterShadow";

            let liniasLetter = document.getElementById('contact-linias-carta')
            liniasLetter.classList = "contact-linias-carta animLetterLinias";
        }

        function resetAnimSvgIntro(){
            let circle1 = document.getElementById('contact-svg-circle')
            circle1.classList = "circle-svg";

            let letterShadow = document.getElementById('letter-shadow')
            letterShadow.classList = "letter-shadow";

            let liniasLetter = document.getElementById('contact-linias-carta')
            liniasLetter.classList = "contact-linias-carta ";
        }

    }

    render() {

        return (
            <div className='contact-container'>
                <div className='contact-container-wrap'>
                    <div className='contact-titles-wrap'>
                        <h1 className='contact-title clamp1'>Contacto</h1>
                        <h1 className='contact-subtitle clamp2'>¿Tienes algún proyecto?</h1>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        )
    }
}
export default Intro;

/*
          <img className='hero-image-card' src={this.state.imgUrl}></img>    
          ç
          
          <div className='contact-wrap'>
              
                    </div>
*/