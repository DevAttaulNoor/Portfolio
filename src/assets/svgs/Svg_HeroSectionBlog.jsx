export const Svg_HeroSectionBlog = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
        >
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop
                        id="stop1"
                        offset="0%"
                        stopColor="rgba(88, 64, 186, 1)"
                    ></stop>
                    <stop
                        id="stop2"
                        offset="100%"
                        stopColor="rgba(112, 91, 196, 1)"
                    ></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient)"
                stroke="url(#sw-gradient)"
                strokeWidth="0"
                d="M20.3-34.1c6.7 2.8 13.4 6.8 18 12.7s7.2 13.6 6 20.7-6 13.6-10.5 19.7c-4.4 6.1-8.5 12-14 15.7-5.6 3.6-12.7 5.1-19.7 4.9s-13.8-2.1-20.8-4.9c-7.1-2.8-14.3-6.6-18.4-12.5-4.1-6-5.1-14.1-4.9-22.1s1.5-16 5-23c3.4-7 9.1-13.1 15.9-15.9 6.9-2.8 15-2.3 22.4-1.1 7.5 1.1 14.3 2.9 21 5.8Z"
                style={{ transition: ".3s" }}
                transform="translate(50 50)"
            ></path>
        </svg>
    )
}
