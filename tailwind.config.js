/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#031A6E',
        'white': '#fff'
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
