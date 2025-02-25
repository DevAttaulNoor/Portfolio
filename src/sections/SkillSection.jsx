import { forwardRef } from 'react'
import { SkillCard } from '../components/cards/SkillCard';
import skillData from '../assets/data/skills.json'

export const SkillSection = forwardRef((props, ref) => {
    return (
        <div className='skill' ref={ref}>
            <h2>Skills</h2>
            <p>My toolkit includes HTML, CSS, JavaScript, and proficiency in frameworks such as React.js. I'm always on the lookout for the latest technologies to stay at the forefront of web development trends.</p>

            <div className='skill_Slider'>
                {skillData.map((data) => (
                    <SkillCard
                        key={data.id}
                        skillData={data}
                    />
                ))}
            </div>
        </div>
    );
});