import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class ProyectItem extends Component {

    state = {
        imgUrl: '',    
        isLoaded: false,
        currentItem: 0,
        isNext: true,
    }
    
    static propTypes = {    
        proyecto: PropTypes.object.isRequired
    }
    
    componentDidMount () {
    
        const {featured_media} = this.props.proyecto;
    
        const getImageUrl = axios.get(`http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/media/${featured_media}`);
    
        Promise.all([getImageUrl]).then(res => {    
            this.setState({    
                imgUrl: res[0].data.media_details.sizes.full.source_url,    
                isLoaded: true    
            });    
        });    
    } 
    
    render() {    
        const {title, content } = this.props.proyecto;    
        const {imgUrl, isLoaded} = this.state;
    
        if(isLoaded){
            //TO-DO
        }

        return (    
          
                <div className='proyecto-item'>
                    <div className='proyecto-img-wrap'>
                        {isLoaded
                            ?  <img className='proyecto-item-img' src={imgUrl} alt={title.rendered}/> 
                            :  <div></div> 
                        }
                    </div>
                    <div className='proyecto-item-wrap-text'>
                        <h2 className='proyecto-item-title'>{title.rendered}</h2>
                        <p className='proyecto-item-desc' dangerouslySetInnerHTML={{__html: content.rendered}}></p>  
                    </div>
                </div>
     
        )
    
    }

}

export default ProyectItem

/*
    <div className='proyecto-item-container'> 
    </div>    

         <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div> 
*/