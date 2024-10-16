import {Happy_Monkey} from "next/font/google"
import localFont from "next/font/local"

export const happyMonkey = Happy_Monkey({
  subsets : ["latin"],
  weight : "400",
  variable : "--font-happy-monkey",
  display : "swap",
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