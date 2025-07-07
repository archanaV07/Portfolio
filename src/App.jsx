import { useState, React } from 'react';
import styles from "./App.module.css";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import Courses from './components/Courses/Courses.jsx';


function App() {

  return (
    <>  
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>    
        <Experience/> 
        <Projects/>
        <Courses/>
        
      </div>
    </>
  )
}

export default App;

