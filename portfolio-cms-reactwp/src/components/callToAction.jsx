
import { Component } from 'react'
//import axios from 'axios';
import './callToAction.css';
import { Link } from "react-router-dom";

export class CallToAction extends Component {
    state = { 
        portada: [], 
        isLoaded: false,
    }

    
    componentDidMount () {
        /*
        axios.get('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/pages/99')
        .then(res => {            
            this.setState({
                portada: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))   
        */        
       
    }
   


    render() {
        function handleLink() {
            window.scrollTo({
                top: 0, 
            })        
        }

        return (  
            <div id='calltoaction-container' className='calltoaction-container'> 
                <div className='calltoaction-wrap'>
                    <h1 className='calltoaction-title'>¿Necesitas una web?</h1>
                    <Link to="contacto" className='calltoaction-btn-wrap'>
                        <h3 onClick={handleLink()} className='calltoaction-btn'>Pedir presupuesto</h3>
                        <p className='calltoaction-littleletter'>Sin compromiso</p>
                    </Link>
                </div>        
            </div>
        )
    }
}
export default CallToAction;

/*
          <img className='hero-image-card' src={this.state.imgUrl}></img>     
*/