import { useState, useEffect } from 'react';
import logo from "/images/universal/icon.png";
import resume from '../assets/svgs/resume.svg';
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
        },
    ];
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState(headerLinks[0].title);
    const [navbarSmlContentVisible, setNavbarSmlContentVisible] = useState(false);

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
                <a
                    href={scrollToHome}
                    className='navbarLeft'
                >
                    <img src={logo} alt='logo' />
                    <p>DevAun</p>
                </a>

                <div className='navbarMiddle'>
                    {headerLinks.map((data) => (
                        <h5
                            key={data.id}
                            onClick={() => { setActiveLink(data.title); data.reflink() }}
                            className={activeLink === data.title ? 'active' : ''}
                        >
                            {data.title}
                        </h5>
                    ))}
                </div>

                <a
                    href='https://drive.google.com/file/d/1g0dmt_okr4hj7qP5hBu-NQL4iBK2kWZb/view?usp=sharing'
                    target='_Blank'
                    className='navbarRight'
                >
                    <img src={resume} alt="Cvlogo" />
                    <p>Resume</p>
                </a>
            </div>

            <div className={scrolled ? 'navbarSml scrolled' : 'navbarSml'}>
                <img src={logo} alt='logo' id='logo' />
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
                    href='https://drive.google.com/file/d/1g0dmt_okr4hj7qP5hBu-NQL4iBK2kWZb/view?usp=sharing'
                    target='_Blank'
                    className='navbarRight'
                >
                    Resume
                </a>
            </div>
        </>
    );
}