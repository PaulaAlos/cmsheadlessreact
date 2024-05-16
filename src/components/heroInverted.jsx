
import { Component } from 'react'
import axios from 'axios';
import './heroInverted.css';

export class HeroInverted extends Component {


    state = { 
        portada: [], 
        isLoaded: false 
    }

    componentDidMount () {
        axios.get('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/pages/11')

        .then(res => {

            console.log(111, res.data.featured_media)
    
            const getImageUrl = axios.get(`http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/media/${ res.data.featured_media}`);
            //let urlImg = undefined;

            Promise.all([getImageUrl]).then(res2 => {    
                //urlImg = res2[0].data.media_details.sizes.full.source_url
                this.setState({
                    portada: res.data,
                    imgUrl: res2[0].data.media_details.sizes.full.source_url,
                    isLoaded: true
                })
            })
            .catch(err => console.log(111, err))

        })
        .catch(err => console.log(err))
        
    
    }

    render() {

        return (
  
            <div className='hero-inverted-container'>
         
                <div >
                    <img className='hero-image-back' src={this.state.imgUrl}></img>                    
                </div>
                <div className='hero-card'>
                    <div className='hero-card-text'>
                        <div className='hero-card-text-wrap'>
                            <h1 className='hero-title'>
                                {
                                    this.state.portada.title && (
                                    <div dangerouslySetInnerHTML={{ __html: this.state.portada.title.rendered }} />)
                                }
                            </h1>
                            <h3>
                                {
                                    this.state.portada.content && (
                                    <div dangerouslySetInnerHTML={{ __html: this.state.portada.content.rendered }} />)
                                }
                            </h3>
                        </div>
                    </div>
                    <img className='hero-image-card' src={this.state.imgUrl}></img>
                    <div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default HeroInverted;
