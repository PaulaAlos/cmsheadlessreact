
import { Component } from 'react'
import axios from 'axios';
import './hero.css';

export class Hero extends Component {
    state = { 
        portada: [], 
        isLoaded: false,
        viewBox: '0 0 800 3000',
    }
        
    componentDidMount () {

        axios.get('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/pages/11')

        .then(res => {
            this.setState({
                portada: res.data,
                titulo: res.data.acf.titulo_portada,
                shortDesc: res.data.acf.desc_corta_web,
                isLoaded: true
            })
    
            initSvg()
        })
        .catch(err => console.log(err))   
                
        let svg = document.getElementById('svg-background');    
        let height = Math.max( svg.scrollHeight, svg.offsetHeight, svg.clientHeight, svg.scrollHeight, svg.offsetHeight);
        let width = Math.max( svg.scrollWidth, svg.offsetWidth, svg.clientWidth, svg.scrollWidth, svg.offsetWidth);
        
        let vB = "0 0 " + width + ' ' + height;
        this.setState({
            viewBox: vB
        })                 
        
        /*---SCROLL SVG ANIMATION---*/

        function initSvg(){
    
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animSvgHero()            
                    }else{
                        resetAnimHero()
                    }
                });
            });
    
            function animSvgHero(){
                let circle1 = document.getElementById('circle-1');        
                circle1.classList.add('circle-animation1');

                let circle2 = document.getElementById('circle-2');        
                circle2.classList.add('circle-animation2');

                let line1 = document.getElementById('line-1');        
                line1.classList.add('line-animation1');

                let line2 = document.getElementById('line-2');        
                line2.classList.add('line-animation2');

                let text = document.getElementById('hero-text');        
                text.classList.add('hero-text-animation');

                //INTRO
                //let circleIntro = document.getElementById('circle-intro-1')
                // circleIntro.classList = "introCircle1 animIntroCircle1In";
            }
    
            function resetAnimHero(){
                let circle1 = document.getElementById('circle-1');        
                circle1.classList.remove('circle-animation1');
                
                let circle2 = document.getElementById('circle-2');        
                circle2.classList.remove('circle-animation2');

                let line1 = document.getElementById('line-1');        
                line1.classList.remove('line-animation1');

                let line2 = document.getElementById('line-2');        
                line2.classList.remove('line-animation2');

                let text = document.getElementById('hero-text');        
                text.classList.remove('hero-text-animation');

                // let circleIntro = document.getElementById('circle-intro-1')
                // circleIntro.classList = "introCircle1 ";
            }
              
            observer.observe(document.querySelector('.hero-container'));
        }


    }

    render() {
        const {isLoaded} = this.state;     

        return (  
            <div className='hero-container'>
                <div id="svg-background" className='svgBackground-container' >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={this.state.viewBox} width="100%" height="100%">
                        <g>
                            <line id='line-1' x1="80%" x2="80%" y1="80%" y2="110%" className='heroLine'></line>
                            <line id='line-2' x1="85%" x2="85%" y1="80%" y2="110%" className='heroLine'></line>  
                        </g>
                        <g>
                            <circle id='circle-1' className='heroCircle' r="50" cx="80%" cy="80%"></circle>
                            <circle id='circle-2' className='heroCircle' r="50" cx="85%" cy="80%"></circle>
                        </g>
                    </svg>           
                </div>
                <div id='hero-text' className='hero-text-wrap'>
                    <h1 className='hero-title' >
                        {isLoaded
                            ?  this.state.titulo
                            :  <div>..Título de portada...</div> 
                        }    
                    </h1>
                    <h2 className='hero-desc'>
                        {isLoaded
                            ?   this.state.shortDesc
                            :  <div>..descripción web...</div> 
                        }  
                    </h2>                  
                </div>                  
            </div>
        )
    }
}
export default Hero;

/*


  const getImageUrl = axios.get(`http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/media/${ res.data.featured_media}`);

            Promise.all([getImageUrl]).then(res2 => {    
                //urlImg = res2[0].data.media_details.sizes.full.source_url
                this.setState({
                    portada: res.data,
                    imgUrl: res2[0].data.media_details.sizes.full.source_url,
                    isLoaded: true
                })
            })
            .catch(err => console.log('hero / ERROR:', err))


&& this.state.portada.title.rendered 

   this.state.portada.content && (
                            <span  className='hero-desc' dangerouslySetInnerHTML={{ __html: this.state.portada.content.rendered }} />)


          <img className='hero-image-card' src={this.state.imgUrl}></img>     
*/