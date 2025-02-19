/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1a202c",
        "primary-light": "#2d3748",
        "primary-dark": "#0f141a",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
