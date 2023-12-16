/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        art: ["Caveat", "cursive"],
      },
      colors: {
        primary: "#FF5C58",
        secondary: "#4FC992",
        light: "#FFFFFF",
        dark: "#212121",
      },
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [],
};
