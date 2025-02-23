import { useState, useEffect } from 'react';
import logo from "/images/universal/icon.png";
import navmenu from '../assets/svgs/navMenu.svg';

export const Header = ({ scrollToHome, scrollToSkill, scrollToProject, scrollToContact }) => {
    const headerLinks = [
        {
            id: 1,
            title: 'Home',
            reflink: scrollToHome,
        },
        {
            id: 2,
            title: 'Skills',
            reflink: scrollToSkill,
        },
        {
            id: 3,
            title: 'Projects',
            reflink: scrollToProject,
        },
        {
            id: 4,
            title: 'Contact',
            reflink: scrollToContact,
        }
    ];
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState(headerLinks[0].title);
    const [navbarSmlContentVisible, setNavbarSmlContentVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`${scrolled && 'scrolled'} navbar`}>
                <a
                    href={scrollToHome}
                    className='navbarLeft'
                >
                    <img src={logo} alt='logo' />
                    <p>DevAun</p>
                </a>

                <div className='navbarRight'>
                    {headerLinks.map((data) => (
                        <h5
                            key={data.id}
                            onClick={() => { setActiveLink(data.title); data.reflink() }}
                            className={activeLink === data.title ? 'active' : ''}
                        >
                            {data.title}
                        </h5>
                    ))}

                    <a
                        target='_Blank'
                        href='https://drive.google.com/file/d/1g0dmt_okr4hj7qP5hBu-NQL4iBK2kWZb/view?usp=sharing'
                    >
                        <h5>Resume</h5>
                    </a>
                </div>
            </div>

            <div className={`${scrolled && 'scrolled'} navbarSml`}>
                <img src={logo} alt='logo of AUN' id='logo' />
                <img src={navmenu} alt='navmenu' id='navmenu' onClick={() => setNavbarSmlContentVisible(!navbarSmlContentVisible)} />
            </div>

            <div className={scrolled ? `navbarSmlContent ${navbarSmlContentVisible ? 'visible' : 'hidden'} scrolled` : `navbarSmlContent ${navbarSmlContentVisible ? 'visible' : 'hidden'}`}>
                {headerLinks.map((data) => (
                    <h5
                        key={data.id}
                        onClick={() => { setActiveLink(data.title); data.reflink() }}
                        className={activeLink === data.title ? 'active' : ''}
                    >
                        {data.title}
                    </h5>
                ))}

                <a
                    target='_Blank'
                    href='https://drive.google.com/file/d/1g0dmt_okr4hj7qP5hBu-NQL4iBK2kWZb/view?usp=sharing'
                >
                    <h5>Resume</h5>
                </a>
            </div>
        </>
    );
}