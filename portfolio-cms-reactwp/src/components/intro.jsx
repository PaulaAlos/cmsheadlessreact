
import { Component } from 'react'
import axios from 'axios';
import './intro.css';

export class Intro extends Component {
    state = { 
        portada: [], 
        isLoaded: false,
        viewBox: '0 0 800 3000',
        scrollDirection: 'down',
        lastScrollY: 0,
    }

    componentDidMount () {
   
        axios.get('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/pages/99')
        .then(res => {            
            this.setState({
                portada: res.data,
                isLoaded: true
            })

            initSvg()
        })
        .catch(err => console.log(err))   
        
        //CHANGE VIEWBOX SVG-BACKGROUND
        let svg = document.getElementById('svg-intro-background');    
        let height = Math.max( svg.scrollHeight, svg.offsetHeight, svg.clientHeight, svg.scrollHeight, svg.offsetHeight);
        let width = Math.max( svg.scrollWidth, svg.offsetWidth, svg.clientWidth, svg.scrollWidth, svg.offsetWidth);        
        let vB = "0 0 " + width + ' ' + height;
        this.setState({
            viewBox: vB
        })                 
        
        /*---SCROLL SVG ANIMATION---*/
        function initSvg(){                
            let previousY = 0;

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        resetAnimSvg()

                        //GET DIRECCION
                        const currentY = entry.boundingClientRect.y;
                        const isIntersecting = entry.isIntersecting
                    
                        // Scrolling down/up
                        if (currentY < previousY) {
                            //SCROLLING UP
                            animSvgIntroTopEnter()
                        } else if (currentY > previousY && isIntersecting) {
                            //SCROLLING DOWN 
                            animSvgIntroDownEnter()   
                        }
                    
                        previousY = currentY;

                    }else{
                        //console.log('----no intersecting')
                        previousY = entry.boundingClientRect.y;
                        resetAnimSvg()
                    }
                });
            });
                  
            observer.observe(document.querySelector('.intro-container'));//text-wrap
        }

        function animSvgIntroTopEnter(){
            let circle1 = document.getElementById('circle-intro-1')
            circle1.classList = "introCircle1 animIntroCircle1";
            let textIntro = document.getElementById('intro-text')
            textIntro.classList = "intro-text-wrap animIntroText";

            let circles3 = document.getElementsByClassName('introCircle3')
            for (let i = 0; i < circles3.length; i++) {
                let circle = circles3[i]
                circle.classList = "introCircle3 animIntroCircle3";
            }
        }

        function resetAnimSvg(){
            let circle1 = document.getElementById('circle-intro-1')
            circle1.classList = "introCircle1 ";
            let textIntro = document.getElementById('intro-text')
            textIntro.classList = "intro-text-wrap";

            let circles3 = document.getElementsByClassName('introCircle3')
            for (let i = 0; i < circles3.length; i++) {
                let circle = circles3[i]
                circle.classList = "introCircle3 ";
            }

        }

        function animSvgIntroDownEnter(){
            let circle1 = document.getElementById('circle-intro-1')
            circle1.classList = "introCircle1 animIntroCircle1b";
            let textIntro = document.getElementById('intro-text')
            textIntro.classList = "intro-text-wrap animIntroText";

            let circles3 = document.getElementsByClassName('introCircle3')
            for (let i = 0; i < circles3.length; i++) {
                let circle = circles3[i]
                circle.classList = "introCircle3 animIntroCircle3b";
            }
        }

    }

    render() {
        return (
            <div id='intro-container' className='intro-container'>
               

                <div id="svg-intro-background" className='svgBackground-intro-container' >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={this.state.viewBox} width="100%" height="100vh">
                        <g>                          
                            <circle id='circle-intro-1' className='introCircle1' r="125%" cx="50%" y="68%"></circle>
                            <circle id='circle-intro-2' className='introCircle2 introCircle' r="20%" cx="0%" cy="50%"></circle>
                            <circle id='circle-intro-3' className='introCircle3  introCircle' r="10%" cx="-2%" cy="33%"></circle>
                            <circle id='circle-intro-4' className='introCircle2 introCircle' r="20%" cx="100%" cy="33%"></circle>
                            <circle id='circle-intro-5' className='introCircle3  introCircle' r="10%" cx="102%" cy="50%"></circle>
                        </g>
                    
                    </svg>           
                </div>
                <div id='intro-text' className='intro-text-wrap'>
                        {
                            this.state.portada.content && (
                            <span  className='intro-desc clamp4' dangerouslySetInnerHTML={{ __html: this.state.portada.content.rendered }} />)
                        }
                  
                </div>                  
            </div>
        )
    }
}
export default Intro;

/*
          <img className='hero-image-card' src={this.state.imgUrl}></img>     
*/