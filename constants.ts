import {
  Ambulance,
  CreditCard,
  Facebook,
  File,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Smile,
  Sparkles,
  Stethoscope,
  Target,
  Youtube,
} from "lucide-react";

// Topbar

export const topbarInfo = {
  location: {
    icon: MapPin,
    location: "New York | Florida",
  },
  phone: {
    icon: Phone,
    phoneNumber: "866-522-7735 | 866-362-4776",
  },
  email: {
    icon: Mail,
    mailId: "info.ny@dentallab.com | info.ny@dentallab.com",
  },
  socialLinks: [
    {
      icon: Linkedin,
      link: "",
    },
    {
      icon: Facebook,
      link: "",
    },
    {
      icon: Instagram,
      link: "",
    },
    {
      icon: Youtube,
      link: "",
    },
  ],
};

// Header

export const navLinks = [
  {
    title: "Products",
    href: "/",
  },
  {
    title: "Latest Cases",
    href: "#",
  },
  {
    title: "Workflow",
    href: "#",
  },
  {
    title: "Educational",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

// Hero

export const heroImages = [
  "/assets/home/hero/slide-1.jpeg",
  "/assets/home/hero/slide-2.jpeg",
  "/assets/home/hero/slide-3.jpeg",
  "/assets/home/hero/slide-4.jpeg",
  "/assets/home/hero/slide-5.jpeg",
  "/assets/home/hero/slide-6.jpeg",
  "/assets/home/hero/slide-7.jpeg",
];

// Our Features

export const featuresData = [
  {
    title: "Your First Case, Backed by $150 Credit",
    description:
      "Whether it’s a single crown or a full-mouth restoration, your first case comes with a $150 lab credit!!!",
    icon: CreditCard,
  },
  {
    title: "Cosmetic Excellence",
    description:
      "Enhance smiles with advanced cosmetic dentistry solutions, including veneers, whitening, and aesthetic contouring designed for natural, confident results.",
    icon: Sparkles,
  },
  {
    title: "High-Precision Restorations",
    description:
      "Restore function and aesthetics with meticulously crafted crowns, bridges, and implants using cutting-edge technology for long-lasting durability.",
    icon: Target,
  },
  {
    title: "All-on-X Specialists",
    description:
      "Transform full-arch tooth replacement with customized All-on-X implant solutions, delivering stability, comfort, and a fully restored smile in fewer visits.",
    icon: Smile,
  },
];

// Stats

export const statsData = [
  {
    subTitle: "Dentists",
    title: "1,700+",
    description:
      "Dentists trust us for exceptional quality, reliable service, and lasting partnerships",
    icon: Stethoscope,
  },
  {
    subTitle: "Total Restorations",
    title: "900,000+",
    description:
      "Restorations delivered with precision and care—trusted by leading dentists nationwide",
    icon: Ambulance,
  },
  {
    subTitle: "Cases Submitted",
    title: "62%",
    description:
      "Cases Submitted Digitally — Trusted by Tech-Forward Practices Using iTero, TRIOS, Medit, and More",
    icon: File,
  },
];

// About Us

export const partners = [
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

export const technicians = [
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
