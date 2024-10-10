import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ContentWrapper } from "@/components/content-wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";

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
        className={`font-giestSans relative antialiased selection:bg-[#00fff61d] selection:text-[#67ffe8d2]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
            <div className="w-full min-h-[100vh] flex flex-col items-center">
              <div className="bg-grainy"/>
              <ContentWrapper className={"sm:mt-20"}>
                <Navbar />
              </ContentWrapper>
              <ContentWrapper>{children}</ContentWrapper>
              <ContentWrapper className={"sm:mt-8"}>
              <Footer/>
              </ContentWrapper>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
