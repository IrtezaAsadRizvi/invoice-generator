/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                custom: ['"Roboto"', 'sans-serif']
            },
            boxShadow: {
                box: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                menu: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            },
            borderRadius: {
                'curve-bottom': '0 0 50% 50% / 0 0 15% 15%',
            },
            keyframes: {
                'zoom-in': {
                    '0%': { transform: 'scale(0.8)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'zoom-out': {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0.8)', opacity: '0' },
                },
                'spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-100%' },
                    '100%': { backgroundPosition: '100%' },
                },
            },
            animation: {
                'zoom-in': 'zoom-in 0.2s ease-out forwards',
                'zoom-out': 'zoom-out 0.2s ease-in forwards',
                'spin': 'spin 2s linear infinite',
                'shimmer': 'shimmer 2s infinite linear'
            },
        },
        colors: {
            'primary': '#E82917',
            'page': '#FFFFFF',
            'body-light': '#e9e9e8',
            'body-dark': '#525659',
            'taskbar-bg-light': '#ccccd0',
            'taskbar-bg-dark': '#323539',
            'action-hover-light': '#bdbfc3',
            'action-hover-dark': '#45474a',
            'action-hover-2-light': '#d5d5d5',
            'action-hover-2-dark': '#474b4e',
            'text-light': '#212121',
            'text-dark': '#FFFFFF',
            'white': '#FFFFFF',
            'black': '#212121',
            'light-gray': '#e9e9e8'
        },
    },
    plugins: [],
    darkMode: 'class'
};
