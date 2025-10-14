"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavbarProps } from "./navbar.types";
import Image from "next/image";

interface NavbarComponentProps {
  navbarContent: NavbarProps;
}

const Navbar = ({ navbarContent }: NavbarComponentProps) => {
  const [menuState, setMenuState] = useState(false);
  const { linksCollection, logo } = navbarContent;

  const menuItems = linksCollection.items

  return (
    <nav
      data-state={menuState && "active"}
      className="bg-white/35 sticky top-0 z-50 w-full border-b backdrop-blur-xl"
    >
      <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
        <div className="relative flex items-center py-2 lg:py-2 lg:justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Image
                src={logo.media.url}
                alt={logo.title}
                width={56}
                height={56}
              />
            </Link>
          </div>

          {/* Desktop Menu - Centrado */}
          <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <ul className="flex gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-foreground hover:text-green-700 block duration-150 text-base"
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

          {/* Botón Mobile Menu - Alineado a la derecha */}
          <div className="ml-auto lg:hidden">
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 p-2.5 cursor-pointer"
            >
              <Menu
                className={`size-6 transition-all duration-300 ${
                  menuState
                    ? "rotate-180 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 m-auto size-6 transition-all duration-300 ${
                  menuState
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-180 scale-0 opacity-0"
                }`}
              />
            </button>
          </div>

          {/* Spacer para Desktop - oculto en mobile */}
          <div className="hidden lg:block lg:w-12"></div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              menuState ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="absolute top-full left-0 right-0 bg-background/80 backdrop-blur border-t">
              <div className="mx-auto max-w-6xl px-6 py-6">
                <ul className="space-y-2 text-base text-center">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={`transform transition-all duration-300 ease-out ${
                        menuState
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                      style={{
                        transitionDelay: menuState ? `${index * 100}ms` : "0ms",
                      }}
                    >
                      <Link
                        href={item.link}
                        className="text-muted-foreground hover:text-green-800 block duration-150 py-2 text-center transition-colors rounded-md"
                        target={item.isExternalLink ? "_blank" : undefined}
                        rel={
                          item.isExternalLink
                            ? "noopener noreferrer"
                            : undefined
                        }
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
