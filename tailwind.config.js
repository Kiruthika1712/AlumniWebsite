/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Outfit', 'serif'],
        lora: ['Poppins', 'serif',],
        poppins: ['Outfit','Montserrat']
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
      },
    },
  },
  plugins: [],
}