module.exports = {
  jit: true,
  darkMode: false,
  theme: {
    colors: {
      primary: "#2c2c2c",
      secondary: "#fbbaa1",
      light: "#fafafa",
      medium: "#c5c5c5",
      dark: "#6a6a6a",
      heavy:'#3d3d3d',
      accent: "#fff7f4",
      grey: "#dce1db",
      info: "",
      success: "",
      warning: "",
      danger: "",
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
    },
    extend: {
      spacing: {
        hidden: '-9999px'
      },
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
      secondary: ["Caladea", "cursive"],
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
};
