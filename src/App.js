import 'animate.css';
import 'react-multi-carousel/lib/styles.css';
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
	const homeRef = useRef(null);
	const skillRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);

	const scrollToRef = (ref) => {
		if (ref && ref.current) {
			window.scrollTo({
				top: ref.current.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className="App">
			<Navbar
				scrollToHome={() => scrollToRef(homeRef)}
				scrollToSkill={() => scrollToRef(skillRef)} 
				scrollToProject={() => scrollToRef(projectRef)}
				scrollToContact={() => scrollToRef(contactRef)}
			/>
			<Home ref={homeRef} />
			<Skill ref={skillRef} />
			<Project ref={projectRef} />
			<Contact ref={contactRef} />
			<Footer />
		</div>
	);
}

export default App;