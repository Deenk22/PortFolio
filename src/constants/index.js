export const navLinks = [
  {href: "about-me", label: "About Me", id: "about"},
  {href: "projects", label: "Projects", id: "projects"},
  {href: "music", label: "Music", id: "music"},
  {href: "tech-stack", label: "Tech Stack", id: "stack"},
];

import {RxDesktop, RxReader, RxRocket, RxArchive} from "react-icons/rx";

export const projects = [
  {
    icon: RxArchive,
    title: "IM Investing",
    content: "Organise and have full control of your investments",
    id: "0",
    img: ["../src/assets/projects/im/IM05.png"],
  },
  {
    icon: RxRocket,
    title: "Rick & Morty",
    content: "Characters from the legendary series Rick and Morty",
    id: "1",
  },
  {
    icon: RxDesktop,
    title: "E-Commerce",
    content: "Sound creation portal for video games, advertising and films",
    id: "2",
  },
  {
    icon: RxReader,
    title: "Technical Interview",
    content: "A real technical interview for a Spanish company",
    id: "3",
  },
  // {
  //   icon: RxAccessibility,
  //   title: "Management",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   id: "4",
  // },
  // {
  //   icon: RxRocket,
  //   title: "Production",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   id: "5",
  // },
];
