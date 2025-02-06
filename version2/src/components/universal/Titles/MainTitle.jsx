export const MainTitle = ({
    titleText,
    titleSpanText,
    titleSpanTextStyle = "text-customPurple-default",
}) => {
    return (
        <h1 className="text-5xl font-semibold">
            {titleText}{" "}
            <span className={`${titleSpanTextStyle}`}>{titleSpanText}</span>
        </h1>
    )
}
