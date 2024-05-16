import './navlinks.css';
import './mainnav.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function NavLinks(props) {

    NavLinks.propTypes = {
        clss: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        classLink: PropTypes.string.isRequired,
    }

    let firstLinkClass = 'nav-link active-link';
    if(props.parent == 'navbar'){
        firstLinkClass = 'nav-link active-link';
    }else if(props.parent == 'footer'){
        firstLinkClass = 'nav-link-foter active-link-footer';
    }
    
    function handleClickLink(e){          
        closeMenu()
        if(props.parent == 'navbar'){
            var current = document.getElementsByClassName("active-link");
            current[0].className = current[0].className.replace(" active-link", "");
    
            let btn = e.target;
            btn.className += " active-link";
            
        }else if(props.parent == 'footer'){
            var current2 = document.getElementsByClassName("active-link-footer");
            current2[0].className = current2[0].className.replace(" active-link-footer", "");
    
            let btn = e.target;
            btn.className += " active-link-footer";

            window.scrollTo({
                top: 0, 
            })        
        }
    }

    function closeMenu(){
        let menu = document.getElementById('nav-wrap-header')
        if(menu.classList.contains('menuOpened')){
            menu.classList.remove("menuOpened");
        }
    }

    return(
        <div id={props.clss} className={props.clss}>
            <Link to="/">
                <div onClick={handleClickLink} className={firstLinkClass}>Inicio</div>
            </Link>                
            <Link to="servicios">
                <div onClick={handleClickLink} className={props.classLink}>Servicios</div>
            </Link>
            <Link onClick={handleClickLink} to="proyectos">
                <div className={props.classLink}>Proyectos</div>
            </Link>
            <Link onClick={handleClickLink} to="contacto">
                <div className={props.classLink}>Contacto</div>
            </Link>
        </div>
    );
}
