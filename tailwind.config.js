/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAF600",
        secondary: "#FA7000",
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
