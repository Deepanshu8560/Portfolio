'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
      name: "Home",
      path: "/",
  },
  {
      name: "Services",
      path: "/services",
  },
  {
      name: "Resume",
      path: "/resume",
  },
  {
      name: "Work",
      path: "/Work",
  },
  {
      name: "Contact",
      path: "/contact",
  },
];


const Nav = () => {
    const pathname= usePathname();
  return (
  <nav className="flex gap-8 ">
    {links.map((link, index) => {
        return (
        <Link 
        href={link.path} 
        key={index} 
        className={`${link.path === pathname && " border-b-2 text-teal-300 border-teal-400"} capitalize font-medium hover:text-teal-400 transition-all`}>
            {link.name}
        </Link> 
        );
    })}
  </nav>);
};

export default Nav;