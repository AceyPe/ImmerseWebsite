/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Include paths to all files where Tailwind classes will be used
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#161c75'
                },
                secondary: {
                    DEFAULT: '#fac4cb'
                },
                third: {
                    DEFAULT: '#d0d8d3'
                } 
            }
        },
    },
    plugins: [],
};