import type { Metadata } from "next/types";
import { siteConfig } from "@/configs/site.config";

export const metadata: Metadata = {
  title: ` LinkBlog | ${siteConfig.name}`,
  description:
    "Hey! I am Mahendra Dani,  I write here about thoughts I have, things I'm working on, stuff I've read, experiences I've had, and so on. Whenever a thought crystalizes in my head, I type it up and post it here.",
  keywords: siteConfig.keywords,

  // Open Graph metadata
  openGraph: {
    title: ` ${siteConfig.name}`,
    description:
     "Hey! I am Mahendra Dani,  I write here about thoughts I have, things I'm working on, stuff I've read, experiences I've had, and so on. Whenever a thought crystalizes in my head, I type it up and post it here.",
    url: `${siteConfig.siteUrl}/links`,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: `Link Blog| ${siteConfig.name}`,
    description:
     " Hey! I am Mahendra Dani, and its my personal blog where I write about my learnings, experiences, hackathons and technologies.",
  },
};


export default function LinkBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
}