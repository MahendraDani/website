import type { Metadata } from "next";
import "./globals.css";
import { ContentWrapper } from "@/components/content-wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/configs/site.config";
import { inter, splineSansMono } from "./fonts";
import { VercelAnalytics } from "@/components/vercel-analytics";
import { Toaster } from "sonner";
import { Sidebar } from "@/components/sidebar";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.url,
    },
  ],
  creator: siteConfig.creator.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `relative antialiased min-h-screen flex flex-col bg-background`,
          splineSansMono.className
        )}
      >
        <Toaster richColors={true} position="top-right" />
        <VercelAnalytics />
        <Container classname="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
