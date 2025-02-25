import { PrimaryBtn } from "../Buttons/PrimaryBtn"
import { MainTitle } from "../Titles/MainTitle"
import { TitleWithDash } from "../Titles/TitleWithDash"

export const DetailSection = ({
    detailSectionContainerStyle = "",
    titleWithDash,
    mainTitle,
    description,
    btns,
    children,
}) => {
    return (
        <div className={`${detailSectionContainerStyle} flex flex-col gap-3`}>
            {titleWithDash && (
                <TitleWithDash
                    titleDashStyle={titleWithDash.titleDashStyle}
                    titleText={titleWithDash.titleText}
                />
            )}

            {mainTitle && (
                <MainTitle
                    titleText={mainTitle.titleText}
                    titleSpanText={mainTitle.titleSpanText}
                    titleSpanTextStyle={mainTitle.titleSpanTextStyle}
                />
            )}

            {description && (
                <p
                    className={`${description.descriptionStyle} text-lg opacity-70`}
                >
                    {description.descriptionText}
                </p>
            )}

            {btns && (
                <PrimaryBtn
                    btnStyleClass={btns.btnStyleClass}
                    btnText={btns.btnText}
                />
            )}

            {children}
        </div>
    )
}
