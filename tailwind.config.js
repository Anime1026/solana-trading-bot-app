const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#00B26F",
      primaryHover: "#069D42D4",
      primaryOpacity: "#00B26F4D",
      primaryBet: "#00B26F33",
      primaryBetHeader: "#00B26F66",
      secondary: "#EA09EF",
      secondaryHover: "#FF49EF",
      homeButton: "#6F42C1",
      homeButtonHover: "#8F62E1",
      text1: "#555555",
      text2: "#726E6E",
      border: "#EDEDED",
      shadow: "#00000040",
      link: "#1B51DC",
      darkPink: "#8C3AAA",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
});
