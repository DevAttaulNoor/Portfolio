import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;