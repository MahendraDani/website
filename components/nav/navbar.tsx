import Link from "next/link";
import { NavLink } from "./nav-link";
import { A } from "../a";

const navMenu = [
  {
    name: "blogs",
    href: "/blogs",
  },
  {
    name: "thoughts",
    href: "/thoughts",
  }
];
export const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-t border-b px-1 py-2">
      <Link href={"/"}>
        <h3 className="text-xl font-bold text-heading">Mahendra Dani</h3>
      </Link>

      <nav className="flex justify-center items-center gap-3">
        {navMenu.map((navItem, index) => (
          // <NavLink key={index} name={navItem.name} href={navItem.href} />
          <A href={navItem.href} key={index} className="text-heading hover:text-heading/80">
            {navItem.name}
          </A>
        ))}
      </nav>
    </div>
  );
};
