import { useState, forwardRef } from 'react';
import { ProjectCard } from '../components/cards/ProjectCard';
import projectsData from "../assets/data/projects.json"

export const ProjectSection = forwardRef((props, ref) => {
    const [activeCategory, setActiveCategory] = useState('beginner');
    const smallProjects = projectsData.find((data) => data.category === 'small')
    const mediumProjects = projectsData.find((data) => data.category === 'medium')
    const largeProjects = projectsData.find((data) => data.category === 'large')

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
                    {smallProjects.projects.map((data) => {
                        return (
                            <ProjectCard
                                key={data.id}
                                projectData={data}
                            />
                        )
                    })}
                </section>

                <section className={`projectBottom_Content intermediate ${activeCategory === 'intermediate' ? '' : 'hide'}`}>
                    {mediumProjects.projects.map((data) => {
                        return (
                            <ProjectCard
                                key={data.id}
                                projectData={data}
                            />
                        )
                    })}
                </section>

                <section className={`projectBottom_Content advanced ${activeCategory === 'advanced' ? '' : 'hide'}`}>
                    {largeProjects.projects.map((data) => {
                        return (
                            <ProjectCard
                                key={data.id}
                                projectData={data}
                            />
                        )
                    })}
                </section>
            </div>
        </div>
    );
});