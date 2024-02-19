/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"'],
        noToSans: ['"Noto Sans"'],
      },
      colors: {
        primary: "#2D74FF",
        secondary: "#5DCC50",
        accent: "#00C75C",
        salleGreen: "#068323",
        yellowSelective: "#FFB700",
        stormDust: "#656565",
        smoky: "#8A8A8A",
        lightGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};

