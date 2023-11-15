export const navLinks = [
  {href: "about-me", label: "About Me", id: "about"},
  {href: "projects", label: "Projects", id: "projects"},
  {href: "music", label: "Music", id: "music"},
];

export const icons = [
  {src: "./src/assets/icons/github.svg", label: "github"},
  {src: "./src/assets/icons/youtube.svg", label: "youtube"},
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
    content: "Organise and have full control of your investments.",
    id: "0",
  },
  {
    icon: RxRocket,
    title: "Rick & Morty",
    content: "Characters from the legendary series Rick and Morty.",
    id: "1",
  },
  {
    icon: RxDesktop,
    title: "E-Commerce",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "2",
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "3",
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "4",
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "5",
  },
];
