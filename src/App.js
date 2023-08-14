import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

import React from 'react'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ProjectCard from './Components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <ProjectCard />
    </div>
  );
}

export default App;