import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="body-container py-2 flex justify-between border-b border-gray-200">
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center">
          <MapPin size={20} />
          <p className="text-[14px] font-semibold">New York | Florida</p>
        </div>

        <div className="w-px h-7 bg-gray-200" />

        <div className="flex gap-1 items-center">
          <Phone size={20} />
          <p className="text-[14px] font-semibold">+1 234 567 890</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center">
          <Mail size={20} />
          <p className="text-[14px] font-semibold">info.ny@dentallab.com</p>
        </div>

        <div className="w-px h-7 bg-gray-200" />

        <div className="flex gap-3 items-center">
          <Link href="#">
            <Linkedin size={20} />
          </Link>
          <Link href="#">
            <Facebook size={20} />
          </Link>
          <Link href="#">
            <Instagram size={20} />
          </Link>
          <Link href="#">
            <Youtube size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
