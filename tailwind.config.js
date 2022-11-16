module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
      "2xl": "1480px",
    },
    extend: {
      colors: {
        primary: "#B882E1",
        purple: "#6054F0",
        orange: "#FF7527",
        success: "#19C486",
        danger: "#DB3333",
        light: "#868686",
        black: {
          DEFAULT: "#000000",
          light: "#1D1D1D",
          dark: "#0F0F0F",
        },
      },
    },
  },
  plugins: [],
}
