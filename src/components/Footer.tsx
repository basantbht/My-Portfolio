"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#edf6f9]/80 dark:bg-[#1c1e22]/80 backdrop-blur-md border-t border-gray-400 dark:border-gray-800 mt-16">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left text */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold dark:text-white text-gray-900 flex justify-center md:justify-start">
              <Link href="#top">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={130}
                  height={40}
                  className="object-cover"
                />
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              © {new Date().getFullYear()} Basant. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <Link
              href="https://github.com/basantbht"
              target="_blank"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/basant-bhatt-3058a7292/"
              target="_blank"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://x.com/BasantBhatt94"
              target="_blank"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
