/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/*.js', 'src/components/.js', 'src/*.jsx', 'src/components/*.jsx', 'src/components/**/.jsx', 'src/components/**/.js'],
  theme: {
    extend: {
      colors: {
        blue: '#',
        lightGray: '#D9D9D9'
      },
      screens: {
        'sm': '430px',
        'md': '720px',
        'lg': '960px',
        'xlg': '1280px'
      }
    },
  },
  plugins: [],
}

