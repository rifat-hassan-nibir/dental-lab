"use client";

import Badge from "@/components/common/ui/Badge";
import Button from "@/components/common/ui/Button";
import SectionTitle from "@/components/common/ui/SectionTitle";
import { ourProductsData } from "@/constants";
import { BookOpen, Layers, MoveRight, Package, ShieldCheck, Zap } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";

const tabIcons: Record<string, React.ElementType> = {
  Zap,
  Layers,
  BookOpen,
  ShieldCheck,
};

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState(0);
  const activeProduct = ourProductsData[activeTab];

  return (
    <section className="px-4 py-10 lg:py-16 xl:py-24 bg-light-gray">
      <div className="body-container">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              icon={<Package className="w-4 h-4 text-paragraph" />}
              title="Our Products"
              className="bg-white"
            />
          </motion.div>
          <SectionTitle
            title="Everything Your Practice Needs"
            description="We offer a comprehensive range of dental restorations and appliances, including fixed prosthetics, implants, removables, and retainers"
            isCenter={true}
          />
        </div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="inline-flex flex-wrap items-center gap-1 sm:gap-1.5 bg-white rounded-xl p-1.5">
            {ourProductsData.map((product, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center gap-1.5 px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[13px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "text-paragraph hover:text-black hover:bg-white/70"
                  }`}
                >
                  <span>{product.tab}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Tab Content Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14 items-start">
              {/* ── LEFT: Content ── */}
              <div className="lg:w-[38%] w-full flex flex-col items-start justify-center lg:py-4">
                {/* Title */}
                <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-black leading-tight mb-3">
                  {activeProduct.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-paragraph text-[14px] md:text-[15px] leading-relaxed mb-7">
                  {activeProduct.description}
                </p>

                {/* CTA */}
                <Button>
                  <div className="flex items-center gap-2">
                    Get Started Today <MoveRight className="w-4 h-4" />
                  </div>
                </Button>
              </div>

              {/* ── RIGHT: 3 Images ── */}
              <div className="lg:w-[62%] w-full">
                {/* Mobile/Tablet: Single image */}
                <div className="lg:hidden relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={activeProduct.images[0]}
                    alt={`${activeProduct.tab} primary`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Desktop: Big image + 2 stacked on right */}
                <div className="hidden lg:flex gap-3 h-85 xl:h-95">
                  {/* Primary large image */}
                  <motion.div
                    key={`main-${activeTab}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex-1 rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={activeProduct.images[0]}
                      alt={`${activeProduct.tab} primary`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Two stacked smaller images */}
                  <div className="flex flex-col gap-3 w-[38%]">
                    {activeProduct.images.slice(1).map((src, imgIndex) => (
                      <motion.div
                        key={`thumb-${activeTab}-${imgIndex}`}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.08 + imgIndex * 0.06 }}
                        className="relative flex-1 rounded-xl overflow-hidden shadow-md"
                      >
                        <Image
                          src={src}
                          alt={`${activeProduct.tab} image ${imgIndex + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
