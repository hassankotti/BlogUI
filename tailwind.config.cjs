/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        viking: {
          DEFAULT: "#5DD5C4",
          50: "#EFFBF9",
          100: "#DFF7F3",
          200: "#BEEEE7",
          300: "#9EE6DC",
          400: "#7DDDD0",
          500: "#5DD5C4",
          600: "#33C6B2",
          700: "#289A8A",
          800: "#1C6D62",
          900: "#11413A",
        },
        "black-pearl": {
          DEFAULT: "#040D21",
          50: "#8EADF1",
          100: "#7CA0EF",
          200: "#5885EB",
          300: "#336BE6",
          400: "#1A55D7",
          500: "#1646B3",
          600: "#11388E",
          700: "#0D2A6A",
          800: "#081B45",
          900: "#040D21",
        },
      },
      fontFamily: {
        sans: ["DIN Next LT Arabic", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
