import { useEffect, useState } from 'react';
import axios from 'axios';
import './mainnav.css';
import NavLinks from './navlinks';
import { Link } from "react-router-dom";

export default function MainNav() {
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

    function handleMenu(){
        let menu = document.getElementById('nav-wrap-header')
        if(menu.classList.contains('menuOpened')){
            menu.classList.remove("menuOpened");
        }else{
            menu.classList.add("menuOpened");
        }
    }


    if (isLoading) {
        return <div className="main-nav"></div>;
    }

    return (

        <div className="main-nav">
            <div className='nav-title'>
                <Link to="/"> 
                    {logoExists
                        ?  <img className="nav-logo" alt="Logo / Favicon" src={logo}></img>
                        :  <div className="nav-title boldItalic">{title}</div> 
                    }   
                </Link>  
            </div>
            <div className="nav-container">   
                       
                <NavLinks parent="navbar" clss="nav-wrap-header" classLink="nav-link"/>     
                <div className='nav-menu-icon' onClick={handleMenu}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='menu-icon' viewBox="0 0 122.88 122.88" ><g><path d="M61.44,0c16.96,0,32.33,6.88,43.44,18c11.12,11.12,18,26.48,18,43.44s-6.88,32.33-18,43.44c-11.12,11.12-26.48,18-43.44,18 c-16.96,0-32.33-6.88-43.44-18C6.88,93.77,0,78.41,0,61.44C0,44.48,6.88,29.12,18,18C29.11,6.88,44.47,0,61.44,0L61.44,0z M61.44,92.3c-3.99,0-7.23-3.24-7.23-7.22s3.24-7.22,7.23-7.22c3.99,0,7.23,3.24,7.23,7.22C68.67,89.07,65.43,92.3,61.44,92.3 L61.44,92.3L61.44,92.3z M61.44,43.99c-3.99,0-7.23-3.23-7.23-7.22c0-3.99,3.24-7.22,7.23-7.22c3.99,0,7.23,3.23,7.23,7.22 S65.43,43.99,61.44,43.99L61.44,43.99L61.44,43.99z M61.44,68.15c-3.99,0-7.23-3.24-7.23-7.22c0-3.99,3.24-7.22,7.23-7.22 c3.99,0,7.23,3.24,7.23,7.22C68.67,64.91,65.43,68.15,61.44,68.15L61.44,68.15L61.44,68.15z M97.67,25.2 C88.4,15.93,75.59,10.2,61.44,10.2c-14.15,0-26.96,5.74-36.23,15.01C15.93,34.48,10.2,47.29,10.2,61.44 c0,14.15,5.74,26.96,15.01,36.24c9.27,9.27,22.08,15.01,36.24,15.01s26.96-5.74,36.23-15.01c9.27-9.27,15.01-22.08,15.01-36.24 C112.68,47.29,106.95,34.48,97.67,25.2L97.67,25.2z"/></g></svg>
                </div>             
            </div>
        </div>
    );
}

/*
    <Link className="nav-link" to="intro">Intro</Link>

------------------------------------------------------------------

ROUTER SIMPLE;

        <div className="main-nav">
            <div className='nav-title'>Portfolio</div>
            <div className="nav-page-wrap">
                <Link to="/">Inicio</Link>
                <Link to="intro">Intro</Link>
                <Link to="servicios">Servicios</Link>
                <Link to="proyectos">Proyectos</Link>
                <Link to="contacto">Contacto</Link>
            </div>
        </div>

------------------------------------------------------------------

        ANTIGUA NAVEGACIÓN, desde WP Api:

export default function MainNav() {
    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/pages')
        .then((response) => response.json())
        .then((pages) => {
            setPages(pages);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main-nav">
            <div className='nav-title'>Portfolio</div>
            <div className="nav-page-wrap">
                {pages.map((page) => ( 
                    <div className='nav-btn' key={page.id}>
                        <a className='nav-link' href={page.link} target="" >{page.title.rendered}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

               

    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost/portfolio_CMSHeadless_ReactWP/wp-json/wp/v2/pages')
        .then((response) => response.json())
        .then((pages) => {
            setPages(pages);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }


------------------------------------------------------------------
                        <div
                            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                        ></div>
*/