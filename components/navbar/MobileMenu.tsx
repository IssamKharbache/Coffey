"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

const MobileMenu = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="bg-primary text-foreground rounded-full block md:hidden p-2 ">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="h-full ml-20 bg-black border-none">
        <DrawerHeader className="flex  justify-between items-center">
          <DrawerTitle>
            <Link href="/">
              <Image
                alt="Coffe"
                src="/logoicon.png"
                className="w-14 mt-4 object-cover"
                width={1500}
                height={1500}
              />
            </Link>
          </DrawerTitle>
          <DrawerClose>
            <X className="size-5  text-primary font-semibold" />
          </DrawerClose>
        </DrawerHeader>
        <div className="h-[1px] bg-primary rounded" />
        <div className="flex flex-col space-y-8 items-center justify-center mt-24 gap-8">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-primary font-bold">
              {link.name}
            </Link>
          ))}
        </div>

        <DrawerFooter>
          <div className="h-[1px] bg-primary rounded " />
          <div className="flex justify-between items-center">
            <Image
              alt="Coffe"
              src="/logoicon.png"
              className="w-12 mt-4 object-cover mb-4"
              width={1500}
              height={1500}
            />
            <p className="text-xs font-semibold text-primary">
              @copyright 2024 Coffey
            </p>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
