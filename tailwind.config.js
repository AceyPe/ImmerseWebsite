/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include paths to all files where Tailwind classes will be used
    theme: {
        extend: {
            colors: {
                textPrimary: {
                    DEFAULT: 'white'
                },
                secondary: {
                    DEFAULT: '#FFC800'
                },
                third: {
                    DEFAULT: '#b5c4fc'
                }
            }
        },
    },
    plugins: [],
};