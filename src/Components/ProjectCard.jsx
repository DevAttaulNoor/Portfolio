import React from 'react'

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <div className="projectCard">
            <img src={imgUrl} />
            <div className="projectCard_txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default ProjectCard