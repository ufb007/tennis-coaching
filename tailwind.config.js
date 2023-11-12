/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a3150',
        'primary-gray': '#7a7f87',
        'primary-green': '#96bd42',
        'primary-green-hover': '#7ca813',
        'yellow': '#f6f7f3',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      width: {
        'page-width': '1170px'
      }
    },
  },
  plugins: [],
}

