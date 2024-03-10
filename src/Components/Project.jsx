import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import smallprojImg1 from "../Assets/img/Projects/calculator.PNG";
import smallprojImg2 from "../Assets/img/Projects/weatherApp.PNG";
import smallprojImg3 from "../Assets/img/Projects/movies_landingPage.PNG";
import smallprojImg4 from "../Assets/img/Projects/todo.png";
import mediumprojImg1 from "../Assets/img/Projects/ecom_website.PNG";
import mediumprojImg2 from "../Assets/img/Projects/shiping_website.PNG";
import largeprojImg1 from "../Assets/img/Projects/fbclone.PNG";

function Project() {
    const smallprojects = [
        {
            title: "Calculator",
            description: "Design & Development",
            imgUrl: smallprojImg1,
        },
        {
            title: "Weather Updates",
            description: "Design & Development",
            imgUrl: smallprojImg2,
        },
        {
            title: "Movies LandingPage",
            description: "Design & Development",
            imgUrl: smallprojImg3,
        },
        {
            title: "Todo",
            description: "Design & Development",
            imgUrl: smallprojImg4,
        },
    ];

    const mediumprojects = [
        {
            title: "Ecommerce Website",
            description: "Design & Development",
            imgUrl: mediumprojImg1,
        },
        {
            title: "Shipping Website",
            description: "Design & Development",
            imgUrl: mediumprojImg2,
        },
    ];

    const largeprojects = [
        {
            title: "Facebook Clone",
            description: "Development",
            imgUrl: largeprojImg1,
        },
    ];

    const [activeCategory, setActiveCategory] = useState('beginner');

    return (
        <div className='project'>
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <div className='projectTop'>
                            <h2>Projects</h2>
                            <p>Explore my portfolio to see a showcase of my work. From e-commerce platforms to interactive web applications, each project reflects my commitment to quality and innovation.</p>
                        </div>

                        <div className='projectMiddle'>
                            <p onClick={() => setActiveCategory('beginner')} className={activeCategory === 'beginner' ? 'active' : ''}>Beginner</p>
                            <p onClick={() => setActiveCategory('intermediate')} className={activeCategory === 'intermediate' ? 'active' : ''}>Intermediate</p>
                            <p onClick={() => setActiveCategory('advanced')} className={activeCategory === 'advanced' ? 'active' : ''}>Advanced</p>
                        </div>

                        <div className={isVisible ? "projectBottom animate__animated animate__slideInUp" : "projectBottom"}>
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
                    </div>}
            </TrackVisibility>
        </div>
    )
}

export default Project;
