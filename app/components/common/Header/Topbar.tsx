import { topbarInfo } from "@/constants";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="body-container py-1.5 xl:py-2 hidden lg:flex justify-between border-b border-gray-200">
      <div className="flex gap-3 xl:gap-4 items-center">
        <div className="flex gap-1.5 items-center text-paragraph">
          <MapPin size={16} className="xl:size-5" />
          <p className="text-[12px] xl:text-[14px] font-semibold">{topbarInfo.location.location}</p>
        </div>

        <div className="w-px h-5 xl:h-7 bg-gray-200" />

        <div className="flex gap-1.5 items-center text-paragraph">
          <Phone size={16} className="xl:size-5" />
          <p className="text-[12px] xl:text-[14px] font-semibold">{topbarInfo.phone.phoneNumber}</p>
        </div>
      </div>

      <div className="flex gap-3 xl:gap-4 items-center text-paragraph">
        <div className="flex gap-1.5 items-center">
          {<topbarInfo.email.icon size={16} className="xl:size-5" />}
          <p className="text-[12px] xl:text-[14px] font-semibold">{topbarInfo.email.mailId}</p>
        </div>

        <div className="w-px h-5 xl:h-7 bg-gray-200" />

        <div className="flex gap-3 xl:gap-4 items-center text-paragraph">
          {topbarInfo.socialLinks.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="text-paragraph hover:text-primary transition-colors"
            >
              <link.icon size={16} className="xl:size-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
