export const navLinks = [
  {href: "about-me", label: "About Me", id: "about"},
  {href: "projects", label: "Projects", id: "projects"},
  {href: "music", label: "Music", id: "music"},
  {href: "tech-stack", label: "Tech Stack", id: "stack"},
];

// import {RxDesktop, RxReader, RxRocket, RxArchive} from "react-icons/rx";

const projects = [
  {
    // icon: RxArchive,
    title: "IM Investing",
    content: "Organise and have full control of your investments.",
    id: "0",
    img: [
      "../src/assets/projects/im/IM01.png",
      "../src/assets/projects/im/IM03.png",
      "../src/assets/projects/im/IM05.png",
      "../src/assets/projects/im/IM06.png",
    ],
    colours: ["bg-blue-im", "bg-darkblue-im", "bg-pink-im"],
    githubLink: "https://github.com/Deenk22/Final_Project_Bootcamp_Front",
  },
  {
    // icon: RxRocket,
    title: "Rick & Morty",
    content: "Characters from the legendary series Rick and Morty.",
    id: "1",
    img: [
      "../src/assets/projects/rick&morty/rm01.png",
      "../src/assets/projects/rick&morty/rm03.png",
      "../src/assets/projects/rick&morty/rm04.png",
      "../src/assets/projects/rick&morty/rm06.png",
      "../src/assets/projects/rick&morty/rm07.png",
    ],
    colours: ["bg-yellow-rm", "bg-green-rm", "bg-black-rm"],
    githubLink: "https://github.com/Deenk22/The-Rick-And-Morty-API",
  },
  {
    // icon: RxDesktop,
    title: "E-Commerce",
    content: "Sound creation portal for video games, advertising and films.",
    id: "2",
    img: [
      "../src/assets/projects/ec/ec03.png",
      "../src/assets/projects/ec/ec01.png",
      "../src/assets/projects/ec/ec02.png",
    ],
    colours: ["bg-green-ec", "bg-white-ec", "bg-black-ec"],
    githubLink: "https://github.com/Deenk22/React_E-commerce",
  },
  {
    // icon: RxReader,
    title: "Technical Intv.",
    content: "A real technical interview for a Spanish company.",
    id: "3",
    img: [
      "../src/assets/projects/pt/pt01.png",
      "../src/assets/projects/pt/pt02.png",
    ],
    colours: ["bg-purple-pt", "bg-darkgray-pt", "bg-black-pt"],
  },
];

export {projects};
