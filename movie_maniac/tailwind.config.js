/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        black: '#101010'
      },
      keyframes: {
        press: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
      },
      animation: {
        press: 'press 0.2s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      transform: ['active'],
      scale: ['active'],
    },
  },
  plugins: [],
}
