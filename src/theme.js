import { extendTheme } from "@chakra-ui/react";

const colors = {
    softGreen: {
        50: "#f4f6f5",
        100: "#e8edea",
        200: "#dce4df",
        300: "#d0d8d3",
        400: "#b8c3bc",
        500: "#a0aea6",
        600: "#809088",
        700: "#607068",
        800: "#404849",
        900: "#202428",
    },
    navy: {
        50: '#e6e7f7',
        100: '#c0c3eb',
        200: '#9aa0de',
        300: '#747cd1',
        400: '#4e59c4',
        500: '#2836b8',
        600: '#202d94',
        700: '#181f70',
        800: '#11164d',
        900: '#0a0e2a',
    },
};

const theme = extendTheme({
    colors,
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold", // Add a consistent style for buttons
            },
            variants: {
                solid: (props) => ({
                    bg: colors.softGreen[500],
                    color: "white",
                    _hover: {
                        bg: colors.softGreen[600],
                    },
                }),
                outline: (props) => ({
                    borderColor: colors.softGreen[500],
                    color: colors.softGreen[500],
                    _hover: {
                        bg: colors.softGreen[50],
                    },
                }),
            },
        },
    },
});

export default theme;