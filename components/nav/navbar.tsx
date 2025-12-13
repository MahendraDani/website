"use client";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { A } from "../a";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleShowMobileNav = () => {
    if (showMobileNav) {
      setShowMobileNav(false);
    } else {
      setShowMobileNav(true);
    }
  };
  const pathname = usePathname();

  return (
    <header>
      {!showMobileNav ? (
        <div className="mt-2 sm:mb-4 flex justify-between items-center border-t border-b py-2">
          <Link href={"/"}>
            <p className="text-base font-medium">Mahendra Dani</p>
          </Link>

          <nav className="hidden sm:flex justify-center items-center gap-3">
            {navMenu.map((navItem, index) => (
              <Link
                href={navItem.href}
                key={index}
                className={cn(
                  "text-sm text-secondary-foreground  hover:text-accent hover:underline underline-offset-4 decoration-dashed duration-300 ease-in-out",
                  {
                    "underline text-accent" : pathname.includes(navItem.href) 
                  }
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </nav>

          <Menu
            strokeWidth={1}
            onClick={handleShowMobileNav}
            className="sm:hidden block"
          />
        </div>
      ) : (
        <div className="w-full h-full z-50 absolute inset-0 bg-white">
          <div className="mx-auto sm:w-[54rem] mt-4 sm:mt-12 sm:mb-4 flex justify-between items-center border-t border-b py-2">
            <Link href={"/"}>
              <h3 className="text-xl text-heading font-medium">
                Mahendra Dani
              </h3>
            </Link>
            <X
              strokeWidth={1}
              onClick={handleShowMobileNav}
              className="block sm:hidden"
            />
          </div>
          <div className="min-h-[60vh] flex justify-center items-center">
            <nav className="flex sm:hidden flex-col justify-start items-center gap-3">
              {navMenu.map((navItem, index) => (
                <A
                  href={navItem.href}
                  key={index}
                  className="text-black/80 hover:text-blue-700/70 underline decoration-white hover:decoration-blue-800/70 underline-offset-4"
                  onClick={handleShowMobileNav}
                >
                  {navItem.name}
                </A>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
