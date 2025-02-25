export const DetailSectionLayout = ({
    leftSection,
    rightSection,
    additionalStyleClass,
}) => {
    return (
        <section
            className={`${additionalStyleClass ? additionalStyleClass : ""} grid w-full grid-cols-2 items-center gap-10 sm:gap-12 md:gap-16`}
        >
            {leftSection}

            {rightSection}
        </section>
    )
}
