/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/*.js', 'src/components/.js', 'src/screens/*.js', 'src/screens/*.jsx', 'src/*.jsx', 'src/components/*.jsx', 'src/components/**/.jsx', 'src/components/**/.js'],
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'brown': '#7E0808',
        'lightblue': '#2DAFAF',
        'lightgray': '#4A4A4A',
        'extra-lightgray': '#D9D9D9',
        'purple': '#9747FF',
        'red': '#F24E1E'
      },
      screens: {
        'sm': '480px',
        'md': '620px',
        'lg': '960px',
        'xl': '1280px'
      },
    },
  },
  plugins: [],
}

