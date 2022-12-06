/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "14px"],
      },
      colors: {
        primary: colors.sky,
      },
    },
  },
  plugins: [],
};
