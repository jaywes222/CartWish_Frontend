/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'majorelle-blue' : '#6457F9',
        'light-majorelle-blue' : '#A6A6FC',
        'dark-majorelle-blue' : '#3c36D1',
        'platinum': '#E5E5E5',
        'space-cadet': '#36304A',
        'web-orange': '#FCA311',
        'crayola-orange': '#FF8848',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      gridTemplateColumns: {
        '80px-auto': '80px auto',
        'fr': '1fr 1fr',
        '2fr': '1fr 4fr'
      },
      width: {
        '100': '450px'
      },
    },
  },
  plugins: [],
}
