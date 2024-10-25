import type { Metadata } from "next";
import "./globals.css";
import { ContentWrapper } from "@/components/content-wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/configs/site.config";
import { happyMonkey } from "./fonts";
// import { VercelAnalytics } from "@/components/vercel-analytics";
import {Analytics} from "@vercel/analytics/next"

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
          `font-sans antialiased selection:bg-[#00fff61d] selection:text-teal-300 px-4 max-w-[100vw]`,
          happyMonkey.className
        )}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="w-full min-h-[100vh] flex flex-col items-center">
            <div className="bg-grainy w-full min-h-[100vh]" />
            <Navbar />
            <ContentWrapper className="min-h-[76vh] px-1">
              <Analytics/>
              {children}
            </ContentWrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
