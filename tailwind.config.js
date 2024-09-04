module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                one: "#001523",
                two: "#002945",
                three: "#003A61",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            maxWidth: {
                readable: "14ch",
                mini: "9ch",
                superMini: "5ch",
            },
            height: {
                100: "29rem",
            },
            inset: {
                eight: "80%",
                fiftyfive: "55%",
            },
        },
    },
    plugins: [],
};
