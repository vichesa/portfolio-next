"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    // {
    //   label: "FAQ",
    //   href: "/about/faq",
    // },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Guest Book",
      href: "/guestBook",
    },
  ];

  return (
    <nav className="fixed bg-[#121212] left-0 right-0 top-0 z-10 ">
      <div className="flex flex-wrap justify-between px-10 py-8">
        <h1 className="text-xl text-[#9CA2A9] font-bold">
          YOLANA
          <span className="text-yellow-600">VICHESA</span>
        </h1>
        <div className="web-menu hidden md:block md:w-auto">
          <ul className="flex gap-5 ">
            {navItems.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={
                    pathname === `${link.href}`
                      ? "text-yellow-500 font-bold"
                      : ""
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu block md:hidden ">
          {!menuIsOpen ? (
            <button onClick={() => setMenuIsOpen(true)}>
              <AiOutlineMenu className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setMenuIsOpen(false)}>
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      <div className="md:hidden">
        {menuIsOpen ? (
          <div className="flex flex-col text-center py-4">
            {navItems.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  setMenuIsOpen(false);
                }}
                className=" border-[0.5px] rounded-full py-1 my-1 border-white hover:bg-white hover:text-black"
              >
                <Link href={link.href} className="block w-full h-full">
                  {link.label}
                </Link>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
