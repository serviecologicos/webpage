"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { NavbarProps } from "./navbar.types";

interface NavbarComponentProps {
  navbarContent?: NavbarProps;
}

const Navbar = ({ navbarContent }: NavbarComponentProps) => {
  const [menuState, setMenuState] = React.useState(false);
 
  const menuItems = navbarContent?.linksCollection.items || [
    { text: "Nosotros", link: "#link", isExternalLink: false },
    { text: "Servicios", link: "#link", isExternalLink: false },
    { text: "Certificados", link: "#link", isExternalLink: false },
    { text: "Mas servicios", link: "#link", isExternalLink: false },
    { text: "Contacto", link: "#link", isExternalLink: false },
  ];

  return (
    <nav
      data-state={menuState && "active"}
      className="bg-background/95 sticky top-0 z-20 w-full border-b backdrop-blur-3xl"
    >
      <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
        <div className="relative flex items-center py-3 lg:py-4 lg:justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              {navbarContent?.logo && (
                <img 
                  src={navbarContent.logo.media.url}
                  alt={navbarContent.logo.title}
                  width={48}
                  height={48}
                />
              )}
            </Link>
          </div>

          {/* Desktop Menu - Centrado */}
          <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <ul className="flex gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    target={item.isExternalLink ? "_blank" : undefined}
                    rel={item.isExternalLink ? "noopener noreferrer" : undefined}
                  >
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón Mobile Menu - Alineado a la derecha */}
          <div className="ml-auto lg:hidden">
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 p-2.5 cursor-pointer"
            >
              <Menu className={`size-6 transition-all duration-300 ${menuState ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
              <X className={`absolute inset-0 m-auto size-6 transition-all duration-300 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`} />
            </button>
          </div>

          {/* Spacer para Desktop - oculto en mobile */}
          <div className="hidden lg:block lg:w-12"></div>
        
        {/* Mobile Menu */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          menuState ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="absolute top-full left-0 right-0 bg-background border-t">
            <div className="mx-auto max-w-6xl px-6 py-6">
              <ul className="space-y-4 text-base text-center">
                {menuItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`transform transition-all duration-300 ease-out ${
                      menuState 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-2 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: menuState ? `${index * 100}ms` : '0ms' 
                    }}
                  >
                    <Link
                      href={item.link}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150 py-2 text-center transition-colors hover:bg-muted/50 rounded-md"
                      target={item.isExternalLink ? "_blank" : undefined}
                      rel={item.isExternalLink ? "noopener noreferrer" : undefined}
                      onClick={() => setMenuState(false)}
                    >
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
