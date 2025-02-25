export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // Width
            maxWidth: {
                outerContainer: "1920px",
                innerContainer: "1800px",
            },

            // Colors
            colors: {
                customPurple: {
                    default: "#5840BA",
                    100: "#705BC4",
                },
                customGreen: {
                    default: "#A4DB74",
                },
            },

            // Fonts
            fontFamily: {
                poppins: "Poppins",
            },
        },
    },
    plugins: [],
}
