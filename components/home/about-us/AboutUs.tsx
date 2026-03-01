import Badge from "@/components/common/ui/Badge";
import SectionTitle from "@/components/common/ui/SectionTitle";
import { Building2, FlaskConical, Users } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "ClearChoice Dental",
    role: "Implant Specialist Partner",
    location: "New York, NY",
  },
  {
    name: "Smile Studio Group",
    role: "Cosmetic Dentistry Partner",
    location: "Miami, FL",
  },
  {
    name: "ProSmile Clinics",
    role: "Full-Service Dental Partner",
    location: "Los Angeles, CA",
  },
  {
    name: "DentaMax Centers",
    role: "Multi-Location Partner",
    location: "Chicago, IL",
  },
];

const technicians = [
  {
    name: "James Harlow",
    specialty: "Crown & Bridge Specialist",
    experience: "14 yrs",
  },
  {
    name: "Sofia Reyes",
    specialty: "Cosmetic Ceramist",
    experience: "10 yrs",
  },
  {
    name: "David Kim",
    specialty: "Implant Prosthetist",
    experience: "12 yrs",
  },
  {
    name: "Amara Nwosu",
    specialty: "All-on-X Expert",
    experience: "9 yrs",
  },
  {
    name: "Thomas Vega",
    specialty: "Digital Scanning Lead",
    experience: "8 yrs",
  },
  {
    name: "Rachel Chen",
    specialty: "Removable Prosthetics",
    experience: "11 yrs",
  },
];

export default function AboutUs() {
  return (
    <section className="px-4 py-10 lg:py-16 xl:py-24 overflow-hidden">
      <div className="body-container">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16 xl:mb-20">
          <Badge icon={<Users className="w-4 h-4" />} title="About Us" />
          <SectionTitle
            title="Built on Trust, Driven by Craft"
            description="Behind every restoration is a team of passionate professionals and a network of dedicated partners who share one goal — your patient's perfect smile."
            isCenter={true}
          />
        </div>

        {/* ─── Our Partners ─── */}
        <div className="mb-16 md:mb-20 xl:mb-28">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Image */}
            <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl shadow-gray-200 relative aspect-[4/3]">
              <Image
                src="/assets/dental_partners.png"
                alt="Our dental partners"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-paragraph font-medium uppercase tracking-wider">
                    Trusted by
                  </p>
                  <p className="text-[15px] font-bold text-black leading-tight">1,700+ Dentists</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 w-full">
              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 text-primary text-[13px] font-bold uppercase tracking-widest mb-3">
                  <Building2 className="w-3.5 h-3.5" />
                  Our Partners
                </span>
                <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-bold text-black leading-tight mb-3">
                  Partnered with the Nation's Leading Dental Practices
                </h3>
                <p className="font-inter text-paragraph text-[15px] md:text-[16px] leading-relaxed">
                  We collaborate with forward-thinking dental practices across the country — from
                  boutique cosmetic studios to large multi-location groups. Our partners rely on us
                  for consistent quality, fast turnarounds, and the technical expertise to handle
                  any case.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-light-gray hover:bg-primary/5 transition-colors duration-300 rounded-xl p-4 border border-transparent hover:border-primary/15 cursor-default"
                  >
                    <p className="text-[15px] font-bold text-black leading-tight mb-0.5">
                      {partner.name}
                    </p>
                    <p className="text-[12px] text-primary font-semibold mb-1">{partner.role}</p>
                    <p className="text-[12px] text-paragraph">{partner.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-light-gray mb-16 md:mb-20 xl:mb-28" />

        {/* ─── Our Technicians ─── */}
        <div>
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl shadow-gray-200 relative aspect-[4/3]">
              <Image
                src="/assets/dental_technicians.png"
                alt="Our dental lab technicians"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Floating badge */}
              <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-paragraph font-medium uppercase tracking-wider">
                    Combined
                  </p>
                  <p className="text-[15px] font-bold text-black leading-tight">
                    64+ Yrs Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 w-full">
              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 text-primary text-[13px] font-bold uppercase tracking-widest mb-3">
                  <FlaskConical className="w-3.5 h-3.5" />
                  Our Technicians
                </span>
                <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-bold text-black leading-tight mb-3">
                  Master Craftspeople Behind Every Restoration
                </h3>
                <p className="font-inter text-paragraph text-[15px] md:text-[16px] leading-relaxed">
                  Our certified dental technicians bring decades of combined expertise in crown and
                  bridge, implant prosthetics, cosmetic ceramics, and digital workflows. Every case
                  is handcrafted with precision, passion, and an unwavering attention to detail.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {technicians.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-light-gray hover:bg-primary/5 transition-colors duration-300 rounded-xl p-4 border border-transparent hover:border-primary/15 cursor-default group"
                  >
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[15px] shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {tech.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[14px] font-bold text-black leading-tight truncate">
                        {tech.name}
                      </p>
                      <p className="text-[12px] text-primary font-semibold truncate">
                        {tech.specialty}
                      </p>
                      <p className="text-[11px] text-paragraph">{tech.experience} exp.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
