import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ContentWrapper } from "@/components/content-wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";
import {Happy_Monkey} from "next/font/google"
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const happyMonkey = Happy_Monkey({
  subsets : ["latin"],
  weight : "400",
  variable : "--font-happy-monkey",
});

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
        className={cn(`antialiased selection:bg-[#00fff61d] selection:text-[#67ffe8d2]`, happyMonkey.className)}
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
              <ContentWrapper className="min-h-[76vh]">{children}</ContentWrapper>
              <ContentWrapper className={"sm:mt-8"}>
              <Footer/>
              </ContentWrapper>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
