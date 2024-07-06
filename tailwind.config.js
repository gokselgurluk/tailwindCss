/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#D6BCFA',
          DEFAULT: '#9F7AEA',
          dark: '#6B46C1',
        },
        width: {
          'custom-width': '950px',
        },
        height: {
          'custom-height': '330px',
        },
      },
    },
    
  },
  plugins: [],
}

