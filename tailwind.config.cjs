/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
     // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1600px',
      },
      maxWidth: {
        "8xl": "1385px",
      },
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
        edward: {
          DEFAULT: "#A0A8A7",
          50: "#FFFFFF",
          100: "#F5F6F6",
          200: "#E0E3E2",
          300: "#CBCFCE",
          400: "#B5BCBB",
          500: "#A0A8A7",
          600: "#838D8C",
          700: "#67716F",
          800: "#4C5352",
          900: "#323636",
        },
        "heavy-metal": {
          BLACK: "#000000",
          DEFAULT: "#121212",
          50: "#BFBFBF",
          100: "#B5B5B5",
          200: "#A1A1A1",
          300: "#8C8C8C",
          400: "#787878",
          500: "#646464",
          600: "#4F4F4F",
          700: "#3B3B3B",
          800: "#262626",
          900: "#121212",
        },
      },
      fontFamily: {
        sans: ["DIN Next LT Arabic", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        hero: "url('./src/assets/articles_hero.png')",
        hero_dark: "url('./src/assets/hero_dark.svg')",
        features: "url('./src/assets/features.jpeg')",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
