const colors = require("tailwindcss/colors");

const theme = {
  // Primary color
  alpha: {
    50: "#F0FFB7",
    100: "#ECFFA2",
    200: "#E4FF79",
    300: "#DBFF51",
    400: "#D3FF28",
    500: "#CAFE00",
    600: "#9DC600",
    700: "#718E00",
    800: "#445600",
    900: "#181E00",
  },
  // Secondary color
  beta: colors.emerald,
  // Accent color
  accent: colors.blue,
  // Neutral color
  omega: colors.zinc,
};

module.exports = theme;
