import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ContentWrapper } from "@/components/content-wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { happyMonkey } from "./fonts";

export const metadata: Metadata = {
  title: "Mahendra Dani",
  description: "Mahendra's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`font-sans antialiased selection:bg-[#00fff61d] selection:text-teal-300`,happyMonkey.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
            <div className="w-full min-h-[100vh] flex flex-col items-center">
              <div className="bg-grainy"/>
              <ContentWrapper className={"sm:mt-12"}>
                <Navbar />
              </ContentWrapper>
              <ContentWrapper className="min-h-[76vh] px-1">{children}</ContentWrapper>
              <ContentWrapper className={"sm:mt-8"}>
              <Footer/>
              </ContentWrapper>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
