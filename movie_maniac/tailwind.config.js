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
      boxShadow: {
        'custom': '0px 3px 8px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
      },
      colors: {
        black: '#101010',
        platinum: '#e6e6e6',
        canary: '#ffe400',
      },
      keyframes: {
        press: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        press: 'press 0.2s ease-in-out',
        scale: 'scale 0.3s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'active'],
      scale: ['hover', 'active'],
    },
  },
  plugins: [],
}
