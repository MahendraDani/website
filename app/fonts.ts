import {Happy_Monkey,Spline_Sans_Mono, Spline_Sans, Inter} from "next/font/google"
import localFont from "next/font/local"

export const happyMonkey = Happy_Monkey({
  subsets : ["latin"],
  weight : "400",
  variable : "--font-happy-monkey",
  display : "auto",
  fallback : ["font-sans"]
});

export const CalSans = localFont({
  src : "./fonts/CalSans-SemiBold.woff2",
  variable : "--font-cal-sans",
  weight : "400 900",
  fallback : ["font-sans"]
})

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const splineSansMono = Spline_Sans_Mono({
  subsets : ["latin"],
  weight : ["400","500", "600", "700"],
  variable :"--font-spline-sans-mono",
})

export const splineSans = Spline_Sans({
  subsets : ["latin"],
  weight : ["400","500", "600", "700"],
  variable :"--font-spline-sans",
})

export const inter = Inter({
  subsets : ["latin"],
  weight : ["400","500","600","700","800","900"],
  variable : "--font-inter"
})