/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'panna':'#f8ece4',
      'beige':'#f0e7db',
      'scuro':'#1a202c',
      }
    },
  },
  plugins: [],
}
