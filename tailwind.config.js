/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *')
            addVariant('child-hover', '& > *:hover')
        },
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#d7f2fe',
                    200: '#afe5fc',
                    300: '#88d7fb',
                    400: '#60caf9',
                    500: '#38bdf8',
                    600: '#2d97c6',
                    700: '#227195',
                    800: '#164c63',
                    900: '#0b2632',
                },
                secondary: {
                    100: '#d3d8de',
                    200: '#a7b0bd',
                    300: '#7c899c',
                    400: '#50617b',
                    500: '#243a5a',
                    600: '#1d2e48',
                    700: '#162336',
                    800: '#0e1724',
                    900: '#070c12',
                },
            },
            fontFamily: {
                body: ['Raleway', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
            },
        },
    },
}
