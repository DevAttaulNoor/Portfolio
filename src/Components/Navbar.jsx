import React, { useState, useEffect } from 'react';
import logo from '../Assets/img/Logo/logo.png';
import navmenu from '../Assets/img/Navbar/navMenu.png';

function Navbar({ scrollToHome, scrollToSkill, scrollToProject, scrollToContact }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [navbarSmlContentVisible, setNavbarSmlContentVisible] = useState(false);

    const openPdf = () => {
        window.open('https://drive.google.com/file/d/1-7j_do-rUNbbAgmfItI7Vryikt4LjxQ3/view?usp=sharing', '_blank');
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const toggleNavbarSmlContent = () => {
        setNavbarSmlContentVisible(!navbarSmlContentVisible);
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
                <div className='navbarLeft'>
                    <img src={logo} alt='logo' />
                    <p>DevAun</p>
                </div>

                <div className='navbarMiddle'>
                    <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => { onUpdateActiveLink('home'); scrollToHome(); }}>
                        Home
                    </a>
                    <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => { onUpdateActiveLink('skills'); scrollToSkill(); }}>
                        Skills
                    </a>
                    <a href='#project' className={activeLink === 'project' ? 'active' : ''} onClick={() => { onUpdateActiveLink('project'); scrollToProject(); }}>
                        Projects
                    </a>
                    <a href='#connect' className={activeLink === 'connect' ? 'active' : ''} onClick={() => { onUpdateActiveLink('connect'); scrollToContact(); }}>
                        Contact
                    </a>
                </div>

                <div className='navbarRight'>
                    <button onClick={openPdf}>Resume</button>
                </div>
            </div>

            <div className={scrolled ? 'navbarSml scrolled' : 'navbarSml'}>
                <img src={logo} alt='logo' id='logo' />
                <img src={navmenu} alt='navmenu' id='navmenu' onClick={toggleNavbarSmlContent} />
            </div>

            <div className={scrolled ? `navbarSmlContent ${navbarSmlContentVisible ? 'visible' : 'hidden'} scrolled` : `navbarSmlContent ${navbarSmlContentVisible ? 'visible' : 'hidden'}`}>
                <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => { onUpdateActiveLink('home'); scrollToHome(); }}>
                    Home
                </a>
                <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => { onUpdateActiveLink('skills'); scrollToSkill(); }}>
                    Skills
                </a>
                <a href='#project' className={activeLink === 'project' ? 'active' : ''} onClick={() => { onUpdateActiveLink('project'); scrollToProject(); }}>
                    Projects
                </a>
                <a href='#connect' className={activeLink === 'connect' ? 'active' : ''} onClick={() => { onUpdateActiveLink('connect'); scrollToContact(); }}>
                    Contact
                </a>
                <button onClick={openPdf}>Resume</button>
            </div>
        </>
    );
}

export default Navbar;