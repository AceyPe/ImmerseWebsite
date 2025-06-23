/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include paths to all files where Tailwind classes will be used
    theme: {
        extend: {
            colors: {
                textPrimary: {
                    DEFAULT: '#FFF'
                },
                textSecondary: {
                    DEFAULT: '#B0B8D1'
                },
                secondary: {
                    DEFAULT: '#FFC800'
                },
                third: {
                    DEFAULT: '#b5c4fc'
                }
            },
            keyframes: {
                backgroundFade: {
                '0%, 100%': {
                    backgroundPosition: '0% 50%',
                },
                '50%': {
                    backgroundPosition: '100% 50%',
                },
                },
            },
            animation: {
                backgroundFade: 'backgroundFade 15s ease infinite',
            },
            backgroundSize: {
                '200': '200% 200%',
            },
        },
    },
    plugins: [],
};