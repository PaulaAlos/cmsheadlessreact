import { Component } from 'react'
import axios from 'axios';
import ServicioItem from './servicioItem';
import './servicios.css';

export class Servicios extends Component {

    state = { 
        servicios: [], 
        isLoaded: false 
    }

    componentDidMount () {
        axios.get('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/servicio')

        .then(res => this.setState({
            servicios: res.data,
            isLoaded: true
        }))

        .catch(err => console.log(err))
        /*
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    let posTopProyectos = document.getElementById('servicios-container').offsetTop;
                    window.scrollTo({
                        top: posTopProyectos, 
                        behavior: 'smooth', 
                        threshold: 0.1
                    })        
                }
            });
        });
        observer.observe(document.querySelector('.servicios-wrap'));
        */
    }

    render() {

        const {servicios, isLoaded} = this.state;

        if(isLoaded){
            //TO-DO
            //console.log('loaded')
        }
        
        return (
            <div id='servicios-container' className='servicios-container'>   
                <div className='servicios-wrap'>
                    <h1 className='servicios-title'>Servicios</h1>
                    <div className='servicio-card'>                                             
                        {servicios.map((servicio) => (  
                            <ServicioItem key={servicio.id} servicio={servicio}/>
                        ))}
                    </div>
                </div>  
            </div>
        )

    }
}

export default Servicios;