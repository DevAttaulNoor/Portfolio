import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
    const handleClick = () => {
        window.open(githubLink, '_blank');
    };

    return (
        <div className="projectCard" onClick={handleClick}>
            <img src={imgUrl} alt={title} />
            <div className="projectCard_txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default ProjectCard;