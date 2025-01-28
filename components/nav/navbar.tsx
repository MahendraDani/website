import Link from "next/link";
import { NavLink } from "./nav-link";
import { A } from "../a";
import Image from "next/image";

const navMenu = [
  {
    name: "about",
    href: "/about",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "blogs",
    href: "/blogs",
  },
  {
    name: "thoughts",
    href: "/thoughts",
  },
];
export const Navbar = () => {
  return (
    <div className="w-[90vw] sm:w-[54rem] mt-4 sm:mt-12 sm:mb-4 flex justify-between items-center border-t border-b py-2">
      <Link href={"/"}>
        <h3 className="text-xl text-heading font-medium">Mahendra Dani</h3>
      </Link>

      <nav className="flex justify-center items-center gap-3">
        {navMenu.map((navItem, index) => (
          <A href={navItem.href} key={index} className="text-black/80 hover:text-blue-700/70 underline decoration-white hover:decoration-blue-800/70 underline-offset-4">
            {navItem.name}
          </A>
        ))}
      </nav>
    </div>
  );
};
