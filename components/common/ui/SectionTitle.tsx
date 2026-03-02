"use client";

import * as motion from "motion/react-client";

export default function SectionTitle({
  title,
  description,
  isCenter = true,
  className,
}: {
  title: string;
  description: string;
  isCenter?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-3 lg:gap-4 ${!isCenter ? "pl-0 md:pl-0 lg:pl-0" : "pl-6 md:pl-10 lg:pl-0 pr-6 md:pr-10 lg:pr-0"}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-semibold leading-tight ${isCenter ? "text-center" : "text-left"} ${isCenter ? "md:w-175" : ""} ${isCenter ? "mx-auto" : ""} ${className}`}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`font-inter text-paragraph text-base lg:text-[18px] font-normal leading-normal ${isCenter ? "text-center" : "text-left"} ${isCenter ? "md:w-150" : ""} ${isCenter ? "mx-auto" : ""} ${className}`}
      >
        {description}
      </motion.p>
    </div>
  );
}
