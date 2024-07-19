/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.css', '*.html'],
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
      backgroundImage: {
        'bg-image': "url('./write.webp')"
      }
    },
  },
  plugins: [],
}

