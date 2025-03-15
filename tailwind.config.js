/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF88",
        secondary: "#00AEEF",
        background: "#121212",
        text: "#E0E0E0",
        warning: "#FFC107",
        danger: "#FF3B30",
        accent: "#6A0DAD",
      },
    },
  },
  plugins: [],
}