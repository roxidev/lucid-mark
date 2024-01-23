/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        default: "#E3E3E3",
        primary: "#7AA3FE",
        secondary: "#006DF9",
        warning: "#F49F21",
        error: "#E85656",
        dark: "#08174F",
        default_dark: "#898989",
        default_soft: "#F1F1F1",
        default_soft_pro: "#F9F9F9",
        warning_soft: "rgba(244, 159, 33, 0.12)",
        black: "#414141",
        dark_black: "#101213",
        primary_soft: "rgba(33, 143, 244, 0.12)",
        secondary_soft: "rgba(255, 255, 255, 0.28)",
        secondary_soft_pro: "rgba(255, 255, 255, 0.20)",
        secondary_soft_btn: "rgba(0, 109, 249, 0.08)",
        secondary_dark: "#08174F",
      },
    },
  },
  plugins: [],
};

