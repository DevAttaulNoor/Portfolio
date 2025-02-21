export const ProjectCard = ({ projectData }) => {
    return (
        <a href={projectData.link} target='_Blank' className="projectCard">
            <img src={projectData.image} alt={`image of ${projectData.title} project`} />

            <div className="projectCard_txt">
                <h4>{projectData.title}</h4>
                <span>{projectData.description}</span>
            </div>
        </a>
    );
};