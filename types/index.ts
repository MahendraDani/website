export type TSite = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  creator: {
    name: string;
    url: string;
  }
  ogImage?: string;
  links: {
    x: string;
    github: string;
  }
}

export type TNavItem = {
  title : string,
  url : string
}

export type TPortfolio = {
  name: string;
  tagline: string;
  resume: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    mail: string;
    codeforces : string,
    leetcode : string
  }
}