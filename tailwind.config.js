/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#100E1D',
        'secondary': '#1E213A'
      },
    },
  },
  plugins: [],
}

