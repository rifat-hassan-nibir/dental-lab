"use client";

import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import Topbar from "./Topbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 shadow-2xl shadow-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="body-container">
        <Topbar />
        <div className="flex items-center justify-between py-3 md:py-4 lg:py-5">
          <div className="w-auto flex justify-start">
            <Image
              src="/assets/logo/logo.svg"
              width={184}
              height={48}
              alt="Logo"
              className="w-32 md:w-40 lg:w-46 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-[14px] xl:text-[16px] font-semibold hover:border-b-2 border-b-2 border-transparent hover:border-primary transition-all duration-300"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex w-auto justify-end">
            <Button>Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
