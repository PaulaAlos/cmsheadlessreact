//import { useEffect, useState } from 'react';
//import axios from 'axios';
import './phasesProject.css';

export default function PhasesProject() {
    /*
    const [title, setTitle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [logoExists, setLogoExists] = useState(false);
    const [logo, setLogo] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setLogoExists(false);

        axios.get('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/pages/113')
        .then(response => {

            if(response.data.acf.logo){
                const getImageUrl = axios.get(`http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/media/${ response.data.acf.logo}`);
    
                Promise.all([getImageUrl]).then(res2 => {  
                    setLogo(res2[0].data.source_url);
                    setLogoExists(true);
                    setIsLoading(false);
                })
                .catch(err => console.log('logo / ERROR:', err))
            }

            if(response.data.acf.titulo_menu){
                setTitle(response.data.acf.titulo_menu);
                setIsLoading(false);
            }            
        })
    }, []);

    if (isLoading) {
        return <div className="main-nav"></div>;
    }
    */

    return (

        <div className="phases-container">
            <div className='phases-wrap'>
                <div id="phases-svg-background" className='phases-svg-background' >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="100%" height="100%">
                        <g>
                            <line x1="0" x2="100%" y1="50%" y2="50%" className='phases-line'></line>
                            <circle id='phases-circle-1' className='phases-circle' r="150" cx="50%" cy="50%"></circle>
                        </g>
                    </svg>           
                </div>
                <div className='phases-text-wrap'>
                    <div className='phase-item'>
                        <div className='phase-title'>
                            Fase 1
                        </div>
                        <div className='phase-desc'>
                            Descripción fase 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
