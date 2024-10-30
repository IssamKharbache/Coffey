import Image from "next/image";
import Link from "next/link";

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
    <nav className="flex justify-between items-center  h-24   mx-auto  w-full max-w-7xl grow gap-5 p-5 rounded-b-md sticky top-0 z-50 bg-black px-8 ">
      {/* link */}
      <div className="flex items-center gap-12">
        {links.map((link) => (
          <Link
            className="text-white hover:text-primary duration-300 uppercase font-sanchez "
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* logo */}

      <Image
        alt="Coffe logo"
        src="/logoco.png"
        className="w-64 p-4 mt-8 mb-6 "
        width={1500}
        height={1500}
      />
      <div className="flex items-center gap-12">
        {secondLinks.map((link) => (
          <Link
            className="text-white hover:text-primary duration-300 uppercase font-sanchez"
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <div className="w-8 h-8 bg-primary rounded-full" />
      </div>
    </nav>
  );
};

export default NavBar;
