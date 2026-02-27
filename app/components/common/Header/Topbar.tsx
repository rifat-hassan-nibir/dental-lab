import { topbarInfo } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="body-container py-2 flex justify-between border-b border-gray-200">
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center">
          <MapPin size={20} />
          <p className="text-[14px] font-semibold">{topbarInfo.location.location}</p>
        </div>

        <div className="w-px h-7 bg-gray-200" />

        <div className="flex gap-1 items-center">
          <Phone size={20} />
          <p className="text-[14px] font-semibold">{topbarInfo.phone.phoneNumber}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center">
          {<topbarInfo.email.icon size={20} />}
          <p className="text-[14px] font-semibold">{topbarInfo.email.mailId}</p>
        </div>

        <div className="w-px h-7 bg-gray-200" />

        <div className="flex gap-3 items-center">
          {topbarInfo.socialLinks.map((link, index) => (
            <Link href={link.link} key={index}>
              <link.icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
