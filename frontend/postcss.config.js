const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [],
  theme: {
    extend: {
      container: {
        center: true,
        button: {
          default: "uppercase",
        },
      },
      height: {
        72: "18rem",
        80: "20rem",
      },
      width: {
        72: "18rem",
        80: "20rem",
      },
      button: {
        default: "uppercase",
      },

      fontFamily: {
        sans: "Open Sans Condensed, sans-serif",
      },
    },
  },
  variants: { backgroundColor: ["responsive", "hover", "focus", "active"] },
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
