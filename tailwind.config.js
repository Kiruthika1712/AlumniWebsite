/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },  
      },    
      fontFamily:{
        playfair: ['Outfit', 'serif'],
        lora: ['Poppins', 'serif'],
        poppins: ['Poppins', 'serif'],
        outfit: ['Outfit', 'serif']
      },
      fontSize: {
        'event-title': '2.5rem', // 40px
        'event-description': '1.125rem', // 18px
        'event-info': '1rem', // 16px
        'title-mobile': '3rem',
      },
      colors: {
        primary: {
          DEFAULT: '#EB6F63',
          hover: '#3A62A4',
        },
        light: {
          DEFAULT: '#B4D5DE',
          hover: '#77B3D1',
        },
        dark: {
          DEFAULT: '#294D89',
          hover: '#24466D',
        },
        muted: {
          DEFAULT: '#697A98',
          hover: '#56647C',
        },
        pale: {
          DEFAULT: '#B8BFD6',
          hover: '#A1A9C4',
        },
        LightBlue:{
          DEFAULT: '#B4D5DE'
        },
        DarkBlue:{
          DEFAULT: '#294D89'
        },
        LightRed:{
          DEFAULT: '#EB6F63'
        }
      },
    },
  },
  plugins: [],
}