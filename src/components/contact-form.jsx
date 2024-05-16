import { useState } from 'react';
import emailjs from '@emailjs/browser'; //API Externa para enviar emails desde la web al correo
import './contact.css';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {    

      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          'service_ey768je',//process.env.REACT_APP_SERVICE_ID,
          'template_i3mxk37',//process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          'BZfNl8U_kNWaPmUXb' //public_key
        )
        .then(
          () => {//result
            setStateMessage('¡Mensaje enviado!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds

            //animar
            let liniasCarta = document.getElementById('contact-linias-carta')
            liniasCarta.classList = 'contact-linias-carta  animLetterExit ';
      
            let letterShadow = document.getElementById('letter-shadow')
            letterShadow.classList = "letter-shadow animShadowExit";
      
            let mensaje = document.getElementById('mensaje-enviado')
            mensaje.classList = "contact-text-svg animMensaje";

          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            console.log('ERROR:', error)
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
      
      
    };

    //TO-DO: Google reCAPTCHA + EmailJS

    return (      

      <div className='contact-wrap'>
        <div className='contact-svg-wrap'>
          <svg className='contact-svg' version="1.1" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
              <g id='contact-svg-group' transform="translate(0 300)" >
                  <circle id='contact-svg-circle' className='circle-svg' cx="400" cy="652.36" r="400" color="#000000" fill="#AFBCA4"  />
                  <g id='carta' className='carta' >
                    <path id='letter-shadow' transform="translate(0 252.36)" d="m162.63 246.23-162.57 162.57c3.125 175.05 69.882 380.05 379.97 390.87l257.33-257.33v-296.11z" color="#000000" className='circle-shadow' />
                    <path id='contact-linias-carta' className='contact-linias-carta' d="m162.63 498.59v296.11h474.73v-296.11h-474.73zm6.9439 7.4692h1.7491l163.61 140.59-163.61 140.58h-1.7517v-281.17zm459.29 0h1.5521v281.17h-1.5548l-159.91-140.58-66.243 58.235 226.15-198.82zm-448.95 0.042h440.15l-217.56 191.27-222.59-191.27zm158.7 144.74 63.937 54.937 62.493-54.937 155.13 136.39h-440.29l158.73-136.39z"     />
                  </g>
                  <text id='mensaje-enviado' className='contact-text-svg' x="170" y="480">{stateMessage && {stateMessage}}</text>
              </g>
          </svg>
        </div>
        <form className='form-wrap' onClick={sendEmail}>
            <label className='form-label'>Nombre</label>
            <input required className='form-input' type="text" name="user_name"/>
            <label className='form-label'>Email</label>
            <input required className='form-input' type="email" name="user_email" />
            <label className='form-label'>¿En qué podemos ayudarte?</label>
            <textarea required className='form-textarea' name="message" />
            <input id='contact-btn' className='form-btn' type='submit' value="Enviar mensaje" disabled={isSubmitting} />
           
        </form>
      </div>
    );
  };
  export default ContactForm;

  /*
type="submit" 

 <div>{stateMessage && <p>{stateMessage}</p>}</div>
  */