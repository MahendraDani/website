import type { Metadata } from "next/types";
import { siteConfig } from "@/configs/site.config";

export const metadata: Metadata = {
  title: `Blogs | ${siteConfig.name}`,
  description:
    "Blogs | Hey! I am Mahendra Dani, and its my personal blog where I write about my learnings, experiences, hackathons and technologies.",
  keywords: siteConfig.keywords,

  // Open Graph metadata
  openGraph: {
    title: `Blogs | ${siteConfig.name}`,
    description:
      "Blogs | Hey! I am Mahendra Dani, and its my personal blog where I write about my learnings, experiences, hackathons and technologies.",
    url: `${siteConfig.siteUrl}/blogs`,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: `Blogs | ${siteConfig.name}`,
    description:
     "Blogs | Hey! I am Mahendra Dani, and its my personal blog where I write about my learnings, experiences, hackathons and technologies.",
  },
};


export default function BlogLayout({
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