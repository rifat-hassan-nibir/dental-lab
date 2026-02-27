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
