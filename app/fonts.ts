import {Happy_Monkey} from "next/font/google"

export const happyMonkey = Happy_Monkey({
  subsets : ["latin"],
  weight : "400",
  variable : "--font-happy-monkey",
  display : "swap",
  fallback : ["font-sans"]
});