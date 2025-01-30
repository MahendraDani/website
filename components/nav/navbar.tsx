"use client";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { A } from "../a";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navMenu = [
  {
    name: "About",
    href: "/about",
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
  return (
    <div className="">
      {!showMobileNav ? (
        <div className="w-[90vw] sm:w-[54rem] mt-4 sm:mt-12 sm:mb-4 flex justify-between items-center border-t border-b py-2">
          <Link href={"/"}>
            <h3 className="text-xl text-heading font-medium">Mahendra Dani</h3>
          </Link>

          <nav className="hidden sm:flex justify-center items-center gap-3">
            {navMenu.map((navItem, index) => (
              <A
                href={navItem.href}
                key={index}
                className="text-black/80 hover:text-blue-700/70 underline decoration-white hover:decoration-blue-800/70 underline-offset-4"
              >
                {navItem.name}
              </A>
            ))}
          </nav>

          <Menu strokeWidth={1} onClick={handleShowMobileNav} className="sm:hidden block" />
        </div>
      ) : (
        <div className="w-full h-full z-50 absolute inset-0 bg-white">
          <div className="w-[90vw] mx-auto sm:w-[54rem] mt-4 sm:mt-12 sm:mb-4 flex justify-between items-center border-t border-b py-2">
            <Link href={"/"}>
              <h3 className="text-xl text-heading font-medium">
                Mahendra Dani
              </h3>
            </Link>
            <X strokeWidth={1} onClick={handleShowMobileNav} className="block sm:hidden" />
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
    </div>
  );
};
