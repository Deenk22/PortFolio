/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-deenk": "#121212",
        "white-section1": "#D9D8D5",
        "black-font": "#333332",
        "light-font": "#8D8D8C",
        "light-purple-buttons": "#635462",
        "yellow-bee": "#9d814c",
        "hover-font": "#944c4e",
      },
      fontFamily: {
        main: ["Quicksand"],
      },
      backgroundImage: {
        "open-menu": "url('./src/assets/svg/open-menu.svg')",
        "close-menu": "url('./src/assets/svg/close-menu.svg')",
        "section-bg": "url('./src/assets/bg-section-dos.jpg')",
        "arrival-photo": "url('./src/assets/ATE-img/arrival.jpg')",
        "puzzle-game": "url('./src/assets/ATE-img/puzzlegame.png')",
        "menu-ui": "url('./src/assets/ATE-img/menuUI.png')",
        "scifi-robot": "url('./src/assets/ATE-img/scifiRobot.png')",
      },
    },
  },
  plugins: [],
};
