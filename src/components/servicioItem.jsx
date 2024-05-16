import { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class ServicioItem extends Component {

    state = {
        imgUrl: '',    
        isLoaded: false    
    }
    
    static propTypes = {    
        servicio: PropTypes.object.isRequired
    }
    
    componentDidMount () {
    
        const {featured_media} = this.props.servicio;
    
        const getImageUrl = axios.get(`http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/media/${featured_media}`);
    
        Promise.all([getImageUrl]).then(res => {    
            this.setState({    
                imgUrl: res[0].data.source_url,    
                isLoaded: true    
            });    
        });            
    } 
    
    render() {    
        const {title, content } = this.props.servicio;    
        const {imgUrl, isLoaded} = this.state;

        if(isLoaded){
            //TO-DO
        }

        return (    
            <div className='servicio-item'> 
                <div className='servicio-icon-wrap'>
                    {isLoaded
                        ?  <img className='servicio-item-icon' src={imgUrl} alt={title.rendered}/> 
                        :  <div></div> 
                    }
                </div>
                <div className='servicio-item-wrap-text'>
                    <h2 className='servicio-item-title'>{title.rendered}</h2>
                    <p className='servicio-item-desc' dangerouslySetInnerHTML={{__html: content.rendered}}></p>  
                </div>
            </div>    
        )
       
    }
}

export default ServicioItem

/*
<img className='servicio-item-icon' src={imgUrl} alt={title.rendered}/> 

<img src={imgUrl} alt={title.rendered}/> 

         <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div> 
*/