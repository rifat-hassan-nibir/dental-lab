import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Topbar from "./Topbar";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="border-b border-gray-200 shadow-2xl shadow-gray-50 px-4">
      <div className="body-container">
        <Topbar />
        <div className="flex items-center justify-between py-4">
          <div className="w-50 flex justify-start">
            <Image src="/assets/logo/logo.svg" width={184} height={48} alt="Logo" />
          </div>
          <nav className="flex gap-8">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-[16px] font-semibold hover:border-b-2 border-b-2 border-transparent hover:border-primary transition-all duration-300"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="w-50 flex justify-end">
            <Button className="bg-primary">Get a Quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
