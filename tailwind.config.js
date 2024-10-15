/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#287FEB',
        purplecss: '#6973DB',
        orangecss: '#D25E00',
        lgraycss: '#E8EBED',
        graycss: '#72787F',
        base: '#1B1D1F'
      },
      fontFamily: {
        nunito: [
          'Nunito', 'sans-serif'
        ]
      },
      fontSize: {
        p80: '80px',
        p66: '66px',
        p22: '22px',
        p52: '52px',
        p26: '26px',
        p18: '18px'
      },
      borderRadius: {
        p10: '10px',
        p20: '20px'
      },
      height: {
        p120: '120px',
        p315: '315px',
        p211: '211px'
      },
      width: {
        p315: '315px',
        p1580: '1580px'
      },
      backgroundImage: {
        // banner: "url('./images/logo.png')",
        'post': "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0)), url('./images/latest.jpg')"
      },
      backgroundSize: {
        bannerrepeat: "auto 120px"
      },
      gridTemplateColumns: {
        track: 'repeat(auto-fill, minmax(372px, 1fr))',
        subject: 'repeat(auto-fill, minmax(413px, 1fr))',
      }
    },
  },
  plugins: [],
}

