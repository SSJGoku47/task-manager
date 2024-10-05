/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  mode: 'jit',
  content: [
    './resources/**/*.{vue,js,ts,jsx,tsx}',
    './resources/*/.{vue,js,ts,jsx,tsx}',
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}" ,
  ],
    theme: {
        extend: {
          colors: {
            bg: 'var(--color-bg)',
            bg_back: 'var(--color-bg-back)',
            text: 'var(--color-text)',
            primary: 'var(--color-primary)',
          },
          screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
          fontSize: {
            xs: '0.65rem',
            sm: '0.80rem',
            base: '0.90rem',
            custom: '1.20rem',
            xl: '1.55rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
          },
          colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
          },
          fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
        },
    },
    plugins: [],
};
