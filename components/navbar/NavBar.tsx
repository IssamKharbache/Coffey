
"use client"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/" },
];
const secondLinks = [
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];
const NavBar = () => {

  return (
   <main className="sticky top-0 z-50  h-24 max-w-7xl mx-auto px-8" >
     <nav className="flex justify-between items-center   gap-5    mx-auto  w-full max-w-7xl  ">
      {/* link */}
      <div className="hidden md:flex items-center gap-12">
        {links.map((link) => (
          <Link
            className="text-black hover:text-primary duration-300 uppercase font-sanchez "
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* logo */}

   <Link href="/">
   <Image
        alt="Coffe logo"
        src="/logoco.png"
        className="w-64 p-4 mt-8 mb-6 "
        width={1500}
        height={1500}
      />
      </Link>
       
     <div className="block md:hidden">
     <MobileMenu  />
     </div>
      <div className="hidden md:flex items-center gap-12">
        {secondLinks.map((link) => (
          <Link
            className="text-black hover:text-primary duration-300 uppercase font-sanchez"
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
   </main>
  );
};

export default NavBar;
