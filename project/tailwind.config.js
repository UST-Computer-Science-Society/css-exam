/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#287FEB',
        secondary: '#DDEFFF',
        accentpurple:'#6973DB',
        accentorange: '#D25E00',
        neutralblack: '#1B1D1F',
        neutralgray: '#72787F',
        neutralltgray: '#E8EBED',
        neutrallight:'#F7F8F9'
      },
      fontSize: {
        h2: '66px',
        h3: '52px',
        h4: '37px',
        h5: '26px',
        h6: '21px',
        b1: '18px',
        b2: '16px',
      }
    },
  },
  plugins: [],
}