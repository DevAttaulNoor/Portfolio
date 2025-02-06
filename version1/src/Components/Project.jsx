import React, { useState, forwardRef } from 'react';
import { ProjectCard } from "./ProjectCard";
import smallprojImg1 from "../Assets/img/Projects/calculator.PNG";
import smallprojImg2 from "../Assets/img/Projects/weatherApp.PNG";
import smallprojImg3 from "../Assets/img/Projects/movies_landingPage.PNG";
import smallprojImg4 from "../Assets/img/Projects/todo.png";
import mediumprojImg1 from "../Assets/img/Projects/ecom_website.PNG";
import mediumprojImg2 from "../Assets/img/Projects/shiping_website.PNG";
import largeprojImg1 from "../Assets/img/Projects/fbclone.png";

export const Project = forwardRef((props, ref) => {
    const [activeCategory, setActiveCategory] = useState('beginner');

    const smallprojects = [
        {
            title: "Calculator",
            description: "Design & Development",
            imgUrl: smallprojImg1,
            githubLink: "https://devattaulnoor.github.io/Calculator/"
        },
        {
            title: "Weather Updates",
            description: "Design & Development",
            imgUrl: smallprojImg2,
            githubLink: "https://devattaulnoor.github.io/WeatherApp/"
        },
        {
            title: "Movies LandingPage",
            description: "Design & Development",
            imgUrl: smallprojImg3,
            githubLink: "https://devattaulnoor.github.io/Movies_LandingPage/"
        },
        {
            title: "Todo",
            description: "Design & Development",
            imgUrl: smallprojImg4,
            githubLink: "https://devattaulnoor.github.io/redux_toolkit_todo/"
        },
    ];

    const mediumprojects = [
        {
            title: "Ecommerce Website",
            description: "Design & Development",
            imgUrl: mediumprojImg1,
            githubLink: "https://devattaulnoor.github.io/ECom_Website/"
        },
        {
            title: "Shipping Website",
            description: "Design & Development",
            imgUrl: mediumprojImg2,
            githubLink: "https://devattaulnoor.github.io/MDL_Website"
        },
    ];

    const largeprojects = [
        {
            title: "Facebook Clone",
            description: "Development",
            imgUrl: largeprojImg1,
            githubLink: "https://devattaulnoor.github.io/FacebookClone-ReactWebsite"
        },
    ];

    return (
        <div className='project' ref={ref}>
            <div className='projectTop'>
                <h2>Projects</h2>
                <p>Explore my portfolio to see a showcase of my work. From e-commerce platforms to interactive web applications, each project reflects my commitment to quality and innovation.</p>
            </div>

            <div className='projectMiddle'>
                <p onClick={() => setActiveCategory('beginner')} className={activeCategory === 'beginner' ? 'active' : ''}>Beginner</p>
                <p onClick={() => setActiveCategory('intermediate')} className={activeCategory === 'intermediate' ? 'active' : ''}>Intermediate</p>
                <p onClick={() => setActiveCategory('advanced')} className={activeCategory === 'advanced' ? 'active' : ''}>Advanced</p>
            </div>

            <div className='projectBottom'>
                <section className={`projectBottom_Content beginner ${activeCategory === 'beginner' ? '' : 'hide'}`}>
                    {smallprojects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        )
                    })}
                </section>

                <section className={`projectBottom_Content intermediate ${activeCategory === 'intermediate' ? '' : 'hide'}`}>
                    {mediumprojects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        )
                    })}
                </section>

                <section className={`projectBottom_Content advanced ${activeCategory === 'advanced' ? '' : 'hide'}`}>
                    {largeprojects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        )
                    })}
                </section>
            </div>
        </div>
    );
});

export default Project;