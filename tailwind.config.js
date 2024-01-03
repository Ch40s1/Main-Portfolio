/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '4rem',
        lg: '40px',
        xl: '3rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        'mainBlack': '#141416',
        'mainText': '#f0f8ff',
        'offText': '#9c27b0',

      },
      fontFamily: {
        'body': ['Source Sans 3'],
        'sans': ['Roboto', 'sans-serif']
      },
      fontWeight: {
        thin: '100',
      },
      backgroundImage: {
        'techWall': "url('./src/img/programming.png')"
      }
    },
  },
  plugins: [],
}
