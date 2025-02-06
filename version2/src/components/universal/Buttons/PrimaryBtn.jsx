export const PrimaryBtn = ({ btnStyleClass = "", btnIcon, btnText }) => {
    return (
        <button
            className={`${btnStyleClass} flex w-fit items-center gap-2 rounded-full bg-customPurple-default px-3 py-2 text-white hover:bg-customPurple-100`}
        >
            {btnIcon && <span>{btnIcon}</span>}

            {btnText && <p>{btnText}</p>}
        </button>
    )
}
