"use client";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { A } from "../a";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarTrigger } from "../ui/sidebar";

const navMenu = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Links",
    href: "/links",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Tils",
    href: "/tils",
  },
  {
    name: "Thoughts",
    href: "/thoughts",
  },
];
export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="mt-2 mb-4 flex justify-between items-center border-t border-b py-2">
        <Link href={"/"}>
          <p className="text-base font-medium">Mahendra Dani</p>
        </Link>

        <nav className="hidden sm:flex justify-center items-center gap-3">
          {navMenu.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={index}
              className={cn(
                "text-sm text-secondary-foreground hover:text-accent hover:underline underline-offset-4 decoration-dashed duration-300 ease-in-out",
                {
                  "underline text-accent/80": pathname.includes(navItem.href),
                }
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu strokeWidth={1} />
          </SheetTrigger>
          <SheetContent className="w-[60vw] space-y-4 bg-secondary">
            <SheetHeader>
              <SheetTitle>Mahendra Dani</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col justify-center items-center gap-3">
              {navMenu.map((navItem, index) => (
                <Link
                  href={navItem.href}
                  key={index}
                  className={cn(
                    "text-sm text-secondary-foreground  hover:text-accent hover:underline underline-offset-4 decoration-dashed duration-300 ease-in-out",
                    {
                      "underline text-accent": pathname.includes(navItem.href),
                    }
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
