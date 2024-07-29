/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'majorelle-blue' : '#6457F9'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      gridTemplateColumns: {
        '80px-auto': '80px auto'
      },
      width: {
        '100': '450px'
      },
    },
  },
  plugins: [],
}
