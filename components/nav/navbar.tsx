import Link from "next/link";
import { NavLink } from "./nav-link";

const navMenu = [
  {
    name: "blogs",
    href: "/blogs",
  },
  {
    name: "papers",
    href: "/papers",
  },
];
export const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href={"/"}>
        <p>Mahendra</p>
      </Link>

      <nav className="flex justify-center items-center gap-3">
        {navMenu.map((navItem, index) => (
          <NavLink key={index} name={navItem.name} href={navItem.href} />
        ))}
      </nav>
    </div>
  );
};
