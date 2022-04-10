const defaultTheme = require("tailwindcss/defaultTheme");

const indigo = {
  100: "#fcf5e8",
  200: "#f7e2bb",
  300: "#f1cf8d",
  400: "#ebbc60",
  500: "#C38918",
  600: "#9f7014",
  700: "#72500e",
  800: "#443008",
  900: "#171003",
};

module.exports = {
  content: ["*.html", "*vue", "src/js/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        barrio: ["Barrio"],
      },
      colors: {
        background: {
          DEFAULT: "#e2e0c9",
        },
        primary: indigo,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            color: indigo[800],
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
