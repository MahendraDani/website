import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ContentWrapper } from "@/components/content-wrapper";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/nav/navbar";

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
        className={` font-giestSans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
            <div className="w-full flex flex-col items-center">
              <ContentWrapper className={"sm:mt-20"}>
                <Navbar />
              </ContentWrapper>
              <ContentWrapper>{children}</ContentWrapper>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
