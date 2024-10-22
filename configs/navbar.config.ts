import { TNavItem } from "@/types";

export const navbarConfig: TNavItem[] = [
  {
    title: "Projects",
    url: "/",
  },
  {
    title: "Blogs",
    url: "/blogs",
  },
  {
    title: "Thoughts",
    url: "/thoughts"
  },
];

export type Portfolio = {
  name: string;
  tagline: string;
  resume: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    mail: string;
  }
}