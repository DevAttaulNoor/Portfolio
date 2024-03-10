import React, { useState, useEffect } from 'react'
import logo from '../Assets/img/Logo/logo.png';

function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const openPdf = () => {
        window.open('https://docs.google.com/document/d/1qHOZ2psW0e00qneCiT2lXXJEskE1dsZyvuCIhGH_gts/edit', '_blank');
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    return (
        <div className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className='navbarLeft'>
                <img src={logo} alt="logo" />
                <p>DevAun</p>
            </div>

            <div className="navbarMiddle">
                <a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => onUpdateActiveLink('home')}>Home</a>
                <a href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                <a href="#project" className={activeLink === 'project' ? 'active' : ''} onClick={() => onUpdateActiveLink('project')}>Projects</a>
                <a href="#connect" className={activeLink === 'connect' ? 'active' : ''} onClick={() => onUpdateActiveLink('connect')}>Contact</a>
            </div>

            <div className="navbarRight">
                <button onClick={openPdf}>
                    Resume
                </button>
            </div>
        </div>
    );
}

export default Navbar;