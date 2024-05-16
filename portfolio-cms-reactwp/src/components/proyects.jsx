import { Component } from 'react'
import axios from 'axios';
//import ProyectItem from './proyectItem';
import './proyects.css';
import Carousel from './carousel';

export class Proyectos extends Component {

    state = { 
        proyectos: [], 
        isLoaded: false, 
        images: [],
        vB: '',
    }

    componentDidMount () {  

        axios.get('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/proyecto')
        .then(res => {
   

            let proyectos = res.data;
            const newProjectsData = [];

            proyectos.map((proyecto, index) => {

                let featured_media = proyecto.featured_media;
                let getImageUrl = axios.get(`http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/media/${featured_media}`);

                Promise.all([getImageUrl]).then(res => {  
                    let srcUrl = res[0].data.source_url;

                    let projectObj = {
                        keyProject: index, 
                        srcUrl: srcUrl, 
                        title: proyecto.title.rendered, 
                        content: proyecto.content
                    }

                    newProjectsData.push(projectObj)                 

                    this.setState({
                        proyectos: newProjectsData,
                        isLoaded: true
                    })
                })
                .catch(err => console.log(err))                
            })
        })
        .catch(err => console.log(err))

        let svg = document.getElementById('proyectos-container');    
                 
        let height = Math.max( svg.scrollHeight, svg.offsetHeight, svg.clientHeight, svg.scrollHeight, svg.offsetHeight) - 50;
        let width = Math.max( svg.scrollWidth, svg.offsetWidth, svg.clientWidth, svg.scrollWidth, svg.offsetWidth);        
        let vB = "0 0 " + width + ' ' + height;     

        this.setState({
            viewBox: vB
        })
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {  
                    animProyectoSvg()  
                }else{
                    resetProyectoSvg()
                }
            });
        });

        observer.observe(document.querySelector('.proyectos-container'));
        
        function animProyectoSvg(){
            let mainCircle = document.getElementById('circle-proyecto-1')
            mainCircle.classList = 'proyectoCircle1 animCircleProject';
        }

        function resetProyectoSvg(){
            let mainCircle = document.getElementById('circle-proyecto-1')
            mainCircle.classList = 'proyectoCircle1';
        }
    }

    render() {
        const {isLoaded} = this.state;      

        return (
            <div className='proyectos-container' id='proyectos-container'>    
                <div className='proyecto-svg-container'>
                   <svg id='svg-proyecto-background' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={this.state.viewBox} width="100%" height="100%">
                        <g>                          
                            <circle id='circle-proyecto-1' className='proyectoCircle1' r="50%" cx="50%" y="80%"></circle>
                            <circle id='circle-intro-2' className='introCircle2 introCircle' r="20%" cx="0%" cy="50%"></circle>
                            <circle id='circle-intro-3' className='introCircle3  introCircle' r="10%" cx="-2%" cy="33%"></circle>
                            <circle id='circle-intro-4' className='introCircle2 introCircle' r="20%" cx="100%" cy="33%"></circle>
                            <circle id='circle-intro-5' className='introCircle3  introCircle' r="10%" cx="102%" cy="50%"></circle>
                        </g>
                    </svg>
                </div>
                <div className='proyectos-wrap'>                
                    <h1 className='proyectos-title clamp1'>Proyectos</h1>
                    <div className='proyecto-item-wrap'> 
                        {isLoaded
                            ?  <Carousel proyectos={this.state.proyectos} />
                            :  <div></div> 
                        }                        
                    </div>
                </div> 
            </div>
        )
    }
}

export default Proyectos

/*
   {proyectos.map((proyecto) => ( 
                            <ProyectItem key={proyecto.id} proyecto={proyecto}/>
                        ))}
*/