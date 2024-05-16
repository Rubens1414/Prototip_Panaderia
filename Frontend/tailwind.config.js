/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que esta ruta cubre todos tus archivos de React
  ],
  theme: {
     extend: {
      fontFamily: {
        custom: ['Breadfast', 'sans-serif','BreadHandmade'], 

      },
    },
  },
  plugins: [],
}

