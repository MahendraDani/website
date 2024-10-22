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
