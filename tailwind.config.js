module.exports = {
  jit: true,
  purge: {
    mode: 'layers',
    content:
      [
        './components/**/*.{vue,js,pug}',
        './layouts/**/*.{vue,js,pug}',
        './pages/**/*.{vue,js,pug}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
      ],
    options: {
      keyframes: true,
      safelist: ['html', 'body']
    }
  },
  darkMode: false,
  theme: {
    colors: {
      primary: "#2c2c2c",
      secondary: "#fbbaa1",
      light: "#fafafa",
      medium: "#c5c5c5",
      dark: "#6a6a6a",
      heavy:'#3d3d3d',
      info: "",
      success: "",
      warning: "",
      danger: "",
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
      secondary: ["Alex Brush", "cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
