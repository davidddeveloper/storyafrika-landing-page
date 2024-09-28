/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/*.js', 'src/components/.js', 'src/*.jsx', 'src/components/*.jsx', 'src/components/**/.jsx', 'src/components/**/.js'],
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'brown': '#7E0808',
        'lightblue': '#2DAFAF',
        'lightgray': '#4A4A4A',
        'purple': '#9747FF'
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

