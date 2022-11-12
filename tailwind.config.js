/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        16: "4rem",
      },
      colors: {
        primary: "#81DEB1",
        neutral: "#17171B",
        neutral2: "#1C1C20",
        neutral3: "#333337",
        neutral4: "#404244",
      },
    },
  },
  plugins: [],
};
