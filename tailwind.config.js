/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class', // Cambiado a 'class' para control manual
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        surface: '#181818',
        primary: '#38bdf8',
        secondary: '#a1a1aa',
        // Colores para modo claro
        'light-background': '#f8fafc',
        'light-surface': '#ffffff',
        'light-primary': '#0284c7',
        'light-secondary': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
