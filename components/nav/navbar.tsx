import Link from "next/link";
import { NavLink } from "./nav-link";

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
    <div className="w-full flex justify-between items-center">
      <Link href={"/"}>
        <h3 className="text-xl font-medium">Mahendra</h3>
      </Link>

      <nav className="flex justify-center items-center gap-3">
        {navMenu.map((navItem, index) => (
          <NavLink key={index} name={navItem.name} href={navItem.href} />
        ))}
      </nav>
    </div>
  );
};
