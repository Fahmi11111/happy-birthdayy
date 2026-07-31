/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-main": "var(--pink-main)",
        "pink-main-light": "var(--pink-main-light)",
        "purple-main": "var(--purple-main)",
        "purple-glow": "var(--purple-glow)",
        rose: "var(--rose)",
        "rose-light": "var(--rose-light)",
        dark: "var(--dark)",
        "dark-card": "var(--dark-card)",
        "dark-border": "var(--dark-border)",
      },
    },
  },
  plugins: [],
};
