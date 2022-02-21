import React from 'react';
import NavBar from './Navbar'
import MainContent from './MainContent';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

import './App.css';





function App() {
  return (
    <div className="App">
     <NavBar />
     <MainContent />
    
     <Resume />
     <Skills />
     <Projects />
     
     <Footer />
    </div>
  );
}

export default App;
