/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        "3xl": "1600px",
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
      zIndex: {
        60: "60",
      },
      backgroundImage: {
        hero: "url('https://s3-alpha-sig.figma.com/img/a8aa/b005/6d5fdb3c18e36ee1a2483abfdb503295?Expires=1660521600&Signature=N2h2b9UzwJnnxUPIutlUNLfzc3~jqcW2qbHohFRJGYLF0rruAc-genPNejBc3QDjSjRkOwut3Mjbikset58Olcqd2vphzW0CwDLMN1S02KCKMZFLxEqAWXg0qwnDw21w3cLF7bDT9nFRbWRFlIX2x6CNbVJ3JdbrBqxDVXoFMaYFZOaJtq~5kGkwtr9SOWHZqYJQEHT~rLmXYyzsao6dXTjzhyXP6dHk8eqAFBm5V7iGwbTfQJ1UakBX02nsXmBJsFjzD50AVxHOyGMRf8wmQzwhDPhVXPlmdNu2JKwhtPpfrVL6-b8HkiU4L-70kUVYbrUh3MnzuToMn1Hr5rTmuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
        hero_dark:
          "url('https://s3-alpha-sig.figma.com/img/c419/e6fd/8e640b83b5226fc9565bfc261a12e79e?Expires=1660521600&Signature=PGLqBbjZCgPeyeZmon5Ew8rgHMRKESRR18t2q1sfxnjTGlumC9iaJOdzEGptVhRnJ8fQBQjP1kxCAyQ47CvaaEB9RfKroHGllzCqeOl28mk5V-cxpQ7kmh1HRG~OvVylxaGZiuvNcM2z98DjvFS0JEzPFHSNWVclgkjUpTGrBYD~ahAB0SHn3WK6QDak97gnyeFlgZ2EXuFwVneqdqHQZjjWqZKYFNC8wnh52lRW9E3a-cU6P~-p2DFqssu2XAB4SsDG8ztj80c8CkW4tbQG7FmH14EMGntZ6bw~SaxJRCBr5E7mVkjimsD55MCUk-Y27H4YIzdkurfLVXlTV~zlnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
        features:
          "url('https://s3-alpha-sig.figma.com/img/56a1/fe87/b1cd12a611afdad3db9d8fe558ff5432?Expires=1660521600&Signature=ErFIVdLcs3VbRmWPf8cpQnSQQO1UKmbgNO9cTFCVifmyvwK2qBMFa4lG0h8NowwqrPdbEFau4uoKVNevhqRx6uAxoijouAhVVqrzNMLt-Uj3NU9B8bYJOH0jGrDUOpe5vmG2CboEwRXXYMXiZQry8Km9AVL1EiJY5ljuBj7IVUfybScW19moEeh-YDNYOGRkdBF~PpHGVTanNad2qmTwLYJz1S5mTN~vASG07mMrN~J7jpquyr0~BfczngevrptHi-oslEtf37JvrjW8fLXLa4TCw18rTLrDV-QcHgA2S4e0AKJMUQwVMI1hzFwSZ-J1P8lJ6mzjrDd~~oCnw1CVQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
