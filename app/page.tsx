import AboutUs from "@/components/home/about-us/AboutUs";
import Hero from "@/components/home/hero/Hero";
import OurFeatures from "@/components/home/our-features/OurFeatures";
import OurProducts from "@/components/home/our-products/OurProducts";
import Stats from "@/components/home/stats/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurFeatures />
      <Stats />
      <AboutUs />
      <OurProducts />
    </main>
  );
}
