import Link from "next/link";
import { NavLink } from "./nav-link";
import { A } from "../a";
import Image from "next/image";

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
    <div className="w-[90vw] sm:w-[40rem] mt-4 sm:mt-12 sm:mb-4 flex justify-between items-center border-t border-b py-2">
      <Link href={"/"}>
        <h3 className="text-xl text-heading">Mahendra Dani</h3>
        {/* <Image src={"/static/icon.png"} height={48} width={48} alt="Nav icon" /> */}
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
