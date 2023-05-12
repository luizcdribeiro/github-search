/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1e293b',
          secondary: '#3d4b64',
          // Adicione outras cores escuras personalizadas aqui
        },
      },

    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}

