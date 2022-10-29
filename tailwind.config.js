/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '16': '4rem',
      },
      colors: {
        'primary': '#00DC92',
      }
    },
  },
  plugins: [],
};
