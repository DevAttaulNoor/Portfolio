export const SkillCard = ({ skillData }) => {
    return (
        <div className="skillCard">
            <img
                src={skillData.icon}
                alt={`icon of ${skillData.text}`}
            />

            <h5>{skillData.text}</h5>
        </div>
    )
}
