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
      link: "https://www.linkedin.com/company/dentallab-com/",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com/Ritesmilenetwork",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/dentallab.com_/",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@ritesmiledentallaboratoryn9143",
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

export const aboutUsData = [
  {
    subTitle: "Our Partners",
    title: "Partnered with the Nation's Leading Dental Practices",
    description:
      "We work closely with dentists who demand excellence in materials, results, and ongoing support. From zirconia and lithium disilicate to PEEK and titanium bars, we use only clinically proven materials from trusted brands to ensure every restoration meets the highest standards. Beyond restorations, we invest in your growth. Our CE-accredited courses and clinical resources help partners stay current with the latest techniques in digital dentistry, full-arch restorations, and material selection.",
    image: "/assets/home/about-us/dental_partners.png",
  },
  {
    subTitle: "Our Technicians",
    title: "Master Craftspeople Behind Every Restoration",
    description:
      "Our technicians are certified experts with extensive training in digital design, esthetic restorations, and full-arch workflows. With a deep understanding of clinical priorities, they approach every case with precision, consistency, and a commitment to excellence. Through continuous education and collaboration with doctors, they ensure restorations are delivered ready to seat reducing chair time and elevating the quality of every outcome.",
    image: "/assets/home/about-us/dental_technicians.png",
  },
];

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

// Our Products
export const ourProductsData = [
  {
    id: "fixed",
    tab: "1. Fixed",
    icon: "Zap",
    title: "Fixed Products",
    description:
      "Crafted with premium materials sourced from globally renowned manufacturers. Click on the product to discover available material variations.",
    images: [
      "/assets/home/our-products/fixed/fixed-1.png",
      "/assets/home/our-products/fixed/fixed-2.png",
      "/assets/home/our-products/fixed/fixed-3.png",
    ],
  },
  {
    id: "implants",
    tab: "2. Implants",
    icon: "Layers",
    title: "Implant Products",
    description:
      "Crafted with premium materials sourced from globally renowned manufacturers. Click on the product to discover available material variations.",
    images: [
      "/assets/home/our-products/implants/implants-1.png",
      "/assets/home/our-products/implants/implants-2.png",
      "/assets/home/our-products/implants/implants-3.png",
    ],
  },
  {
    id: "removables",
    tab: "3. Removables",
    icon: "BookOpen",
    title: "Removables",
    description:
      "Crafted with premium materials sourced from globally renowned manufacturers. Click on the product to discover available material variations.",
    images: [
      "/assets/home/our-products/removables/removables-1.png",
      "/assets/home/our-products/removables/removables-2.png",
      "/assets/home/our-products/removables/removables-3.png",
    ],
  },
  {
    id: "retainers",
    tab: "4. Retainers",
    icon: "ShieldCheck",
    title: "Retainers",
    description:
      "Retainers are orthodontic appliances designed to maintain teeth in their corrected positions following active orthodontic treatment.",
    images: [
      "/assets/home/our-products/retainers/retainers-1.png",
      "/assets/home/our-products/retainers/retainers-2.png",
      "/assets/home/our-products/retainers/retainers-3.png",
    ],
  },
];

export const testimonialsData = [
  {
    name: "Dr. Sarah Mitchell",
    practice: "Mitchell Cosmetic Dentistry",
    location: "New York, NY",
    rating: 5,
    text: "I've been working with this lab for over 4 years and the quality is consistently exceptional. My patients are always thrilled with the results — the ceramic work looks completely natural.",
    initials: "SM",
  },
  {
    name: "Dr. James Okafor",
    practice: "Okafor Family Dental",
    location: "Houston, TX",
    rating: 5,
    text: "The turnaround times are incredible and the fit on their crowns is spot-on every single time. Switching to this lab was one of the best decisions I've made for my practice.",
    initials: "JO",
  },
  {
    name: "Dr. Elena Vasquez",
    practice: "Vasquez Implant Center",
    location: "Miami, FL",
    rating: 5,
    text: "Their All-on-X work is in a class of its own. As a specialist, I need absolute precision and this lab delivers every time. My patients love their new smiles.",
    initials: "EV",
  },
  {
    name: "Dr. Michael Chen",
    practice: "Premier Dental Group",
    location: "Los Angeles, CA",
    rating: 5,
    text: "The digital workflow integration with my iTero scanner is seamless. Cases go from scan to delivery faster than I ever thought possible without sacrificing an ounce of quality.",
    initials: "MC",
  },
  {
    name: "Dr. Priya Sharma",
    practice: "Smile Studio Dental",
    location: "Chicago, IL",
    rating: 5,
    text: "Outstanding customer service and incredible attention to detail. Whenever I have a complex cosmetic case, I know I can count on this team to deliver something beautiful.",
    initials: "PS",
  },
  {
    name: "Dr. Robert Nguyen",
    practice: "Nguyen Restorative Dentistry",
    location: "Dallas, TX",
    rating: 5,
    text: "The $150 first-case credit got me through the door, but the quality of their work is what made me stay. Over 200 cases later and I wouldn't trust anyone else.",
    initials: "RN",
  },
];

// Footer Links
export const footerLinks = [
  {
    heading: "Services",
    links: [
      { title: "Fixed Products", href: "#" },
      { title: "Implants", href: "#" },
      { title: "Removables", href: "#" },
      { title: "Retainers", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Our Technicians", href: "#" },
      { title: "Latest Cases", href: "#" },
      { title: "Workflow", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { title: "Contact Us", href: "#" },
      { title: "FAQ", href: "#" },
      { title: "Educational Resources", href: "#" },
      { title: "Get a Quote", href: "#" },
    ],
  },
];

export const bottomBarLinks = [
  { title: "Shipping & Logistics", href: "#" },
  { title: "Remarks & Warranties", href: "#" },
  { title: "Technical Support", href: "#" },
];
