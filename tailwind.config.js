module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
    theme: {
        extend: {
            colors: {
                transparent: "#ffffff00",
                grayWhite: "#fff",
                gray50: "#EDF2F5",
                gray400: "#919BA7",
                gray800: "#4B535C",
                gray900: "#3B4147",
                grayBlack: "#111",
                secondary300: "#D75C84",
                secondary400: "#BC3B65",
            },
            fontWeight: {
                regular: 400,
                medium: 500,
                semiBold: 600,
                bold: 700,
            },
            fontSize: {
                tw0: 0,
                tw18: "18px",
            },
            lineHeight: {
                tw0: 0,
                tw26: "26px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
