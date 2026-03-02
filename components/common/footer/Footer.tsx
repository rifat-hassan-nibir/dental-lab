import { bottomBarLinks, footerLinks, topbarInfo } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="body-container px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/assets/logo/logo.svg"
              width={160}
              height={42}
              alt="Dental Lab Logo"
              className="w-36 h-auto mb-4"
            />
            <p className="font-inter text-paragraph text-[14px] leading-relaxed max-w-xs mb-6">
              A full-service dental laboratory committed to delivering high-quality restorations
              with exceptional value and precision.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2.5 mb-6">
              <a
                href={`tel:${topbarInfo.phone.phoneNumber}`}
                className="font-inter text-[13px] text-paragraph hover:text-primary transition-colors flex items-center gap-2"
              >
                <topbarInfo.phone.icon size={14} className="text-primary shrink-0" />
                {topbarInfo.phone.phoneNumber}
              </a>
              <a
                href={`mailto:${topbarInfo.email.mailId}`}
                className="font-inter text-[13px] text-paragraph hover:text-primary transition-colors flex items-center gap-2"
              >
                <topbarInfo.email.icon size={14} className="text-primary shrink-0" />
                {topbarInfo.email.mailId}
              </a>
              <p className="font-inter text-[13px] text-paragraph flex items-center gap-2">
                <topbarInfo.location.icon size={14} className="text-primary shrink-0" />
                {topbarInfo.location.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {topbarInfo.socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="w-8 h-8 rounded-full  flex items-center justify-center text-white bg-primary hover:bg-primary/80 hover:scale-105 transition-all duration-300"
                >
                  <link.icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <p className="text-[12px] uppercase tracking-widest font-bold text-black mb-4">
                {section.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="font-inter text-[14px] text-paragraph hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="body-container px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-[13px] text-paragraph">
            © 2026 Dental Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {bottomBarLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-inter text-[13px] text-paragraph hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
