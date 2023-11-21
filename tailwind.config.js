/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-deenk": "#121212",
        "white-section1": "#D9D8D5",
        "black-font": "#333332",
        "hover-font": "#944c4e",
        "js-yellow": "#f7df1e",
        "linkedIn-blue": "#0e76a8",
        "github-color": "#9b50cb",
        "youtube-color": "#c4302b",
        "unreal-color": "#61cdff",
        "blue-im": "#d0e4e9",
        "yellow-rm": "#eeee29",
        "green-ec": "#408084",
        "purple-pt": "#7472a1",
      },
      fontFamily: {
        main: ["Quicksand"],
      },
      backgroundImage: {
        "open-menu": "url('./src/assets/svg/open-menu.svg')",
        "close-menu": "url('./src/assets/svg/close-menu.svg')",
        "section-stack": "url('./src/assets/bg-section-tres.jpg')",
        "section-bg": "url('./src/assets/bg-section-dos.jpg')",
        "project-01": "url('./src/assets/projects/rick&morty/rm01.png')",
      },
    },
  },
  plugins: [],
};
