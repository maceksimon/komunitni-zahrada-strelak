const defaultTheme = require("tailwindcss/defaultTheme");

const indigo = {
  100: "#e5e6ff",
  200: "#b3b3ff",
  300: "#8080ff",
  400: "#4d4dff",
  500: "#1a1bff",
  600: "#0001e6",
  700: "#0001b3",
  800: "#000180",
  900: "#00004d",
};

module.exports = {
  content: ["*.html", "*vue", "js/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sentient", ...defaultTheme.fontFamily.sans],
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
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
