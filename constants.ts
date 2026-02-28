import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

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

export const images = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
];

export const featuresData = [
  {
    title: "Your First Case, Backed by $150 Credit",
    description:
      "Whether it’s a single crown or a full-mouth restoration, your first case comes with a $150 lab credit!!!",
  },
  {
    title: "Cosmetic Excellence",
    description:
      "Enhance smiles with advanced cosmetic dentistry solutions, including veneers, whitening, and aesthetic contouring designed for natural, confident results.",
  },
  {
    title: "High-Precision Restorations",
    description:
      "Restore function and aesthetics with meticulously crafted crowns, bridges, and implants using cutting-edge technology for long-lasting durability.",
  },
  {
    title: "All-on-X Specialists",
    description:
      "Transform full-arch tooth replacement with customized All-on-X implant solutions, delivering stability, comfort, and a fully restored smile in fewer visits.",
  },
];
