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

// import '../../../assets/style/PrimaryBtn.css'

// export const PrimaryBtn = ({ btnText }) => {
//     return (
//         <button class="animated-button">
//             <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                     d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
//                 ></path>
//             </svg>
//             {btnText && <span class="text">{btnText}</span>}
//             <span class="circle"></span>
//             <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                     d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
//                 ></path>
//             </svg>
//         </button>
//     )
// }
