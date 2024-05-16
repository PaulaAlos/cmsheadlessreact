
import '../App.css';
//import MainNav from '../components/mainnav';
//import HeroInverted from './components/heroInverted';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Servicios from '../components/servicios';
//import Posts from './components/posts';
import Proyectos from '../components/proyects';
import Contact from '../components/contact';
import CallToAction from '../components/callToAction';
import Phases from '../components/phasesProject';


function Home() {
  return (
    <div id='home' className="home">
      <Hero/>
      <Intro/>
      <Servicios/>
      <Phases/>
      <CallToAction/>
      <Proyectos/>
      <Contact/>
    </div>
  );
}

export default Home;


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