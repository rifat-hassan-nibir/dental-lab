import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Header from "./components/common/Header/Header";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dental Lab",
  description: "Advanced Dental Laboratory Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="antialiased font-bricolage">
        <Header />
        {children}
      </body>
    </html>
  );
}
