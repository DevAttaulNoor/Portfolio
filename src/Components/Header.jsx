import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../Assets/img/logo.svg';
import navIcon1 from '../Assets/img/nav-icon1.svg';
import navIcon2 from '../Assets/img/nav-icon2.svg';
import navIcon3 from '../Assets/img/nav-icon3.svg';

function Header() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } 
            else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home"> <img src={logo} alt="Logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/atta-ul-noor-2aa7a1236/" target="_blank"> <img src={navIcon1} alt="" /> </a>
                            <a href="https://github.com/DevAttaulNoor" target="_blank"> <img src={navIcon3} alt="" /> </a>
                            <a href="https://www.facebook.com/AttaulNoor.2001/" target="_blank"> <img src={navIcon2} alt="" /> </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;