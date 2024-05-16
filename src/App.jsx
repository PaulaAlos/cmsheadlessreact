import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/home';
import MainNav from './components/mainnav';
//import HeroInverted from './components/heroInverted';
//import Hero from './components/hero';
import Intro from './components/intro';
import Servicios from './components/servicios';
//import Posts from './components/posts';
import Proyectos from './components/proyects';

import Contact from './components/contact';
import Footer from './components/footer';
//import CallToAction from './components/callToAction';


function App() {
  return (
    <div id='App' className="App">
      <MainNav/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/intro" element={ <Intro /> } />
        <Route path="/servicios" element={ <Servicios /> } />
        <Route path="/proyectos" element={ <Proyectos /> } />
        <Route path="/contacto" element={ <Contact /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


/*
ANTES DE ROUTER:

function App() {
  return (
    <div id='App' className="App">
      <MainNav/>
      <Hero/>
      <Intro/>
      <Servicios/>
      <CallToAction/>
      <Proyectos/>
      <Contact/>
    </div>
  );
}

*/
/*
   <Posts/>
   */