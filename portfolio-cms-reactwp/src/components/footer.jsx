import { useEffect, useState } from 'react';
import axios from 'axios';
import './footer.css';
import NavLinks from './navlinks';
import { Link } from "react-router-dom";

export default function Footer() {
    
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

    return (

        <div className="footer-container">
            <div className='footer-wrap'>
                <div className='footer-info-wrap'>
                    <div className='footer-copyright'>
                        <Link to="/"> 
                            {logoExists
                                ?  <img className="nav-logo" alt="Logo / Favicon" src={logo}></img>
                                :  <div className="nav-title boldItalic">{title}</div> 
                            }   
                        </Link>  
                    </div>
                    <div className='footer-copyright nav-title'>Desarrollo web</div>
                    <div className='footer-copyright nav-title'>Copyright © PauDev 2024</div>
                </div>
                <div className='footer-links-wrap'>
                    <NavLinks parent="footer" clss="nav-wrap-footer" classLink="nav-link-foter"/>
                </div>
                <div className='footer-icons-wrap'>
                    <div id='icon-footer-whatsapp' className='footer-icon hideIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 510 512.459">
                            <path className='svg-icon' d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"/>
                        </svg>
                    </div>
                    <div id='icon-footer-google' className='footer-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 640 640"><path className='svg-icon' d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z"/></svg>
                    </div>
                    <div id='icon-footer-linkedin' className='footer-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 512 509.64">
                            <rect className='svg-icon' width="512" height="509.64" rx="115.61" ry="115.61"/>
                            <path className='svg-icon2' d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*

const [logo, setLogo] = useState(null);
    const [title, setTitle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [logoExists, setLogoExists] = useState(false);

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


     <div className='nav-title'>
                <Link to="/"> 
                    {logoExists
                        ?  <img className="nav-logo" alt="Logo / Favicon" src={logo}></img>
                        :  <div className="nav-title boldItalic">{title}</div> 
                    }   
                </Link>  
            </div>
            <div className="nav-container">
                <div className='nav-wrap'>
                    <Link to="/">
                        <div className="nav-link active-link" >Inicio</div>
                    </Link>                
                    <Link to="servicios">
                        <div className="nav-link">Servicios</div>
                    </Link>
                    <Link to="proyectos">
                        <div className="nav-link">Proyectos</div>
                    </Link>
                    <Link to="contacto">
                        <div className="nav-link">Contacto</div>
                    </Link>
                </div>
            </div>
*/