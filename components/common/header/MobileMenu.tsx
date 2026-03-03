"use client";

import { navLinks, topbarInfo } from "@/constants";
import { Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 h-full w-[85%] sm:w-[70%] max-w-87.5 bg-white p-5 sm:p-7 md:p-10 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Image
            src="/assets/logo/logo.svg"
            width={140}
            height={36}
            alt="Logo"
            className="w-32 sm:w-36 md:w-40 h-auto"
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 sm:gap-2 mb-6 md:mb-10">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              onClick={onClose}
              className="px-4 py-3 text-[16px] font-semibold hover:bg-gray-50 hover:text-primary rounded-lg transition-all"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 sm:space-y-4 md:space-y-5 pt-6 sm:pt-8 border-t border-gray-100">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                Our Location
              </p>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-gray-700 leading-tight">
                {topbarInfo.location.location}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                Call Us
              </p>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-gray-700">
                {topbarInfo.phone.phoneNumber}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                Email Us
              </p>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-gray-700 break-all lg:break-normal">
                {topbarInfo.email.mailId}
              </p>
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <p className="text-[11px] sm:text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-3 sm:mb-4">
              Follow Us
            </p>
            <div className="flex gap-3 sm:gap-4">
              {topbarInfo.socialLinks.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="text-paragraph hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14">
          <Button className="w-full py-4 text-lg shadow-lg shadow-primary/20">Get a Quote</Button>
        </div>
      </div>
    </div>
  );
}
