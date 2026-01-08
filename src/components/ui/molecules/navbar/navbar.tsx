"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/atoms/sheet/sheet";
import { Menu } from "lucide-react";
import { NavbarProps } from "./navbar.types";
import { Button } from "../../atoms/button/button";

interface NavbarComponentProps {
  navbarContent: NavbarProps;
}

const Navbar = ({ navbarContent }: NavbarComponentProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { linksCollection, logo, title } = navbarContent;

  const menuItems = linksCollection.items;
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo.media.url}
              alt={logo.title}
              width={56}
              height={56}
            />
            <span className="text-xl font-bold text-foreground">{title}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-8 text-xl">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-foreground hover:text-primary transition-colors"
                    target={item.isExternalLink ? "_blank" : undefined}
                    rel={
                      item.isExternalLink ? "noopener noreferrer" : undefined
                    }
                  >
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8 px-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    target={item.isExternalLink ? "_blank" : undefined}
                    rel={
                      item.isExternalLink ? "noopener noreferrer" : undefined
                    }
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors animate-fade-in"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
