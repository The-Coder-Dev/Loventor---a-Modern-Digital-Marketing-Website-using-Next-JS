"use client";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Work", url: "/" },
  { id: 4, title: "Contact", url: "/contact" },
];

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-999 text-white bg-black/50 border-b border-white/20 backdrop-blur-md h-20 flex items-center px-5">
      {/* Top Bar */}
      <div className="mx-auto max-w-7xl flex items-center justify-center w-full ">
        <div className="w-full flex items-center justify-between  ">
          {/* Logo + Menu Links / Right Side*/}
          <div className="flex items-center gap-10">
            <Link href="/">
              <Image src="/devixlogo.png" width={100} height={60} alt="Logo" />
            </Link>

            <div className="items-center gap-3 hidden md:flex">
              {links.map((item) => {
                return (
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={item.url}
                    key={item.id}
                    className="hover:bg-white/20 rounded-lg transition-all duration-300 w-full p-3"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <Button ButtonText={"Get In Touch"} url={"/contact"} />

          {/* ------------------Mobile NavBar------------------- */}

          {/* Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-white/20 cursor-pointer flex md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`absolute top-20 left-0 w-full bg-black h-100 md:hidden
        backdrop-blur-lg flex flex-col items-start justify-center space-y-6 p-5 transition-all duration-500
        ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3"
        }`}
        >
          {links.map((item) => {
            return (
              <Link
                onClick={() => setIsOpen(false)}
                href={item.url}
                key={item.id}
                className="hover:bg-white/30 rounded-lg transition-all duration-300 w-full p-3"
              >
                {item.title}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer w-full text-white bg-primary shadow-2xl shadow-primary outline-accent hover:bg-blue-800  transition-colors duration-300 outline-2 px-4 py-2 rounded-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
