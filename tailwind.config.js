/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        principal: ["Quicksand"],
      },
      palette: {},
      backgroundImage: {
        "open-menu": "url('./src/assets/svg/open-menu.svg')",
        "close-menu": "url('./src/assets/svg/close-menu.svg')",
      },
    },
  },
  plugins: [],
};
