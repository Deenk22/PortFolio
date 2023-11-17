export const navLinks = [
  {href: "about-me", label: "About Me", id: "about"},
  {href: "projects", label: "Projects", id: "projects"},
  {href: "music", label: "Music", id: "music"},
  {href: "tech-stack", label: "Tech Stack", id: "stack"},
];

import {
  RxDesktop,
  RxReader,
  RxRocket,
  RxAccessibility,
  RxArchive,
} from "react-icons/rx";

export const projects = [
  {
    icon: RxArchive,
    title: "IM Investing",
    content: "Organise and have full control of your investments",
    id: "0",
  },
  {
    icon: RxRocket,
    title: "Rick & Morty",
    content: "Characters from the legendary series Rick and Morty",
    id: "1",
    techStack: [
      "../src/assets/icons/github.svg",
      "../src/assets/icons/react.svg",
    ],
  },
  {
    icon: RxDesktop,
    title: "E-Commerce",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "2",
    techStack: [
      "./src/assets/icons/github.svg",
      "./src/assets/icons/react.svg",
    ],
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "3",
    techStack: [
      "./src/assets/icons/github.svg",
      "./src/assets/icons/react.svg",
    ],
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "4",
    techStack: [
      "./src/assets/icons/github.svg",
      "./src/assets/icons/react.svg",
    ],
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "5",
    techStack: [
      "./src/assets/icons/github.svg",
      "./src/assets/icons/react.svg",
    ],
  },
];
