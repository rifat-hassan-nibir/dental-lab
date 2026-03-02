import AboutUs from "@/components/home/about-us/AboutUs";
import ContactUs from "@/components/home/contact-us/ContactUs";
import Hero from "@/components/home/hero/Hero";
import OurFeatures from "@/components/home/our-features/OurFeatures";
import OurProducts from "@/components/home/our-products/OurProducts";
import Stats from "@/components/home/stats/Stats";
import Testimonials from "@/components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurFeatures />
      <Stats />
      <AboutUs />
      <OurProducts />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
