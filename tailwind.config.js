/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif',],
        poppins: ['Poppins','Montserrat']
      },
      colors: {
        primary: {
          DEFAULT: '#4675C0',
          hover: '#3A62A4',
        },
        light: {
          DEFAULT: '#8FC8EB',
          hover: '#77B3D1',
        },
        dark: {
          DEFAULT: '#19335A',
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