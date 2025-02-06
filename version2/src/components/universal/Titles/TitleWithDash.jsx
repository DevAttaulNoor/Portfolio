export const TitleWithDash = ({
    titleDashStyle = "",
    titleTextStyle = "",
    titleText,
}) => {
    return (
        <div className="flex items-center gap-2">
            <div className={`${titleDashStyle} h-0.5 w-5`}></div>
            <h5 className={`${titleTextStyle} text-xl font-medium`}>
                {titleText}
            </h5>
        </div>
    )
}
