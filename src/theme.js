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
    Yellow: {
        50: "#FFF4CC",   // Lightest
        100: "#FFE799",  // Very Light
        200: "#FFDB66",  // Light
        300: "#FFCE33",  // Soft Yellow
        400: "#FFC800",  // Base Yellow
        500: "#E6B300",  // Slightly Darker
        600: "#CC9F00",  // Darker
        700: "#B38A00",  // Even Darker
        800: "#997600",  // Much Darker
        900: "#806200",
    }
};

const theme = extendTheme({
    colors,
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold", // Add a consistent style for buttons
                boxShadow: "xl"
            },
            variants: {
                solid: (props) => ({
                    bg: colors.Yellow[500],
                    color: "white",
                    _hover: {
                        bg: colors.Yellow[600],
                    },
                    _active: {
                        bg: colors.Yellow[300]
                    }
                }),
                outline: (props) => ({
                    borderColor: colors.Yellow[500],
                    color: colors.Yellow[500],
                    _hover: {
                        bg: colors.Yellow[50],
                    },
                }),
            },
        },
        Input: {
            variants: {
                outline: {
                    field: {
                        _focus: {
                            borderColor: colors.Yellow[500],   // Change border color on focus
                            boxShadow: "0 0 0 1px #ECC94B", // Optional: yellow outline ring
                        },
                        _hover: {
                            borderColor: colors.Yellow[500]
                        }
                    },
                },
            },
        },
        Textarea: {
            baseStyle: {
                height:"200px",
            },
            variants: {
                outline: {
                        _focus: {
                            borderColor: colors.Yellow[500],   // Change border color on focus
                            boxShadow: "0 0 0 1px #ECC94B", // Optional: yellow outline ring
                        },
                        _hover: {
                            borderColor: colors.Yellow[500]
                        }
                },
            },
        },
    },
});

export default theme;