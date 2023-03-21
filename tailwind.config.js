/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2sm': ['0.7rem', '1rem'],
        '3sm': ['0.6rem', '0.85rem'],
      },
    },
  },
  plugins: [],
}
