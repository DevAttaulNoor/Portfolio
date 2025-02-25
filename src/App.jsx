import { useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { SkillSection } from './sections/SkillSection';
import { ProjectSection } from './sections/ProjectSection';
import { ContactSection } from './sections/ContactSection';

const App = () => {
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
        <>
            <Header
                scrollToHome={() => scrollToRef(homeRef)}
                scrollToSkill={() => scrollToRef(skillRef)}
                scrollToProject={() => scrollToRef(projectRef)}
                scrollToContact={() => scrollToRef(contactRef)}
            />
            <HeroSection ref={homeRef} />
            <SkillSection ref={skillRef} />
            <ProjectSection ref={projectRef} />
            <ContactSection ref={contactRef} />
            <Footer scrollToHome={() => scrollToRef(homeRef)} />
        </>
    )
}

export default App