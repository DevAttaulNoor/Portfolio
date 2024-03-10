import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Skill />
			<Project />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;