/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'media', // Usa 'media' para modo oscuro automático o 'class' si prefieres activarlo manualmente
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        surface: '#181818',
        primary: '#38bdf8',
        secondary: '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
