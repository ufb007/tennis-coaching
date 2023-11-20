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
      },
      animation: {
        'moveLeft-770': 'moveLeft-770 1s forwards',
        'moveRight-770': 'moveRight-770 1s forwards',
        'moveLeft-400': 'moveLeft-400 1s forwards',
        'moveRight-400': 'moveRight-400 1s forwards',
      },
      keyframes: {
        'moveLeft-770': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-770px)' }
        },
        'moveRight-770': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(770px)' }
        },
        'moveLeft-400': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-400px)' }
        },
        'moveRight-400': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(400px)' }
        }
      }
    },
  },
  plugins: [],
}

