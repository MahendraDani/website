import Link from "next/link";

interface NavLinkProps {
  name: string;
  href: string;
}

export const NavLink = ({ name, href }: NavLinkProps) => {
  return (
    <Link href={href} className="hover:text-white/80">
      {name}
    </Link>
  );
};
