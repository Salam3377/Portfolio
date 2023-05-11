import { useContext } from 'react'

import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import NavbarS from './components/Navbar/Navbar';
import ScrollUp from './components/Scroll/ScrollUp';

import './App.css';
import { ThemeContext } from './theme'


function App() {

  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div  id='top' className={`${themeName} App`}>
      <NavbarS />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <ScrollUp />
      <Footer />

      

    
    </div>
  );
}

export default App;
