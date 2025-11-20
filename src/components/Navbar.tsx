"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [activeSection, setActiveSection] = useState("");

  const handleMenuClick = (id: string) => {
    setActiveSection(id); // manually update active
  };

  const menuItems = [
    { href: "#top", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#edf6f9]/80 dark:bg-[#212428]/80 backdrop-blur-md shadow-sm z-50 transition-all">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#top" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={40}
              className="object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-[17px]">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <Link
                  onClick={() => handleMenuClick(item.href.replace("#", ""))}
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 transition-all
    text-gray-700
    after:content-['']
    after:absolute
    after:left-1/2
    after:bottom-[0.1rem]
    after:h-[0.2rem]
    after:w-0
    after:bg-red-500
    after:rounded-full
    after:transition-all
    after:duration-300
    hover:after:left-0
    hover:after:w-full dark:text-gray-300`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Resume Button */}
            <Link
              href="/basantCV.pdf"
              download
              className="px-4 py-2 rounded-lg shadow hover:opacity-90 transition text-gray-800 bg-gray-400 dark:bg-[#212428]/80 dark:text-gray-300
"
            >
              Resume
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white transition cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-7 h-7 dark:text-white" />
            ) : (
              <Bars3Icon className="w-7 h-7 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#1a1c1f] shadow-md rounded-lg p-4 mt-2">
            <div className="space-y-4 text-lg dark:text-white">
              {menuItems.map((item) => (
                <div key={item.href} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* Resume */}
              <Link
                href="/basantCV.pdf"
                download
                className="block py-2 text-primary font-semibold"
                onClick={toggleMobileMenu}
              >
                Resume
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 py-2 hover:text-primary transition"
              >
                {theme === "dark" ? (
                  <>
                    <SunIcon className="w-5 h-5" /> Light Mode
                  </>
                ) : (
                  <>
                    <MoonIcon className="w-5 h-5" /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
