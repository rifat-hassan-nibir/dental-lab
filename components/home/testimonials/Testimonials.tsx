"use client";

import Badge from "@/components/common/ui/Badge";
import SectionTitle from "@/components/common/ui/SectionTitle";
import { MessageSquare } from "lucide-react";
import * as motion from "motion/react-client";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {
  return (
    <section className="py-10 lg:py-16 xl:py-24 overflow-hidden">
      <div className="body-container">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center mb-10 md:mb-14 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              icon={<MessageSquare className="w-4 h-4 text-paragraph" />}
              title="Testimonials"
            />
          </motion.div>
          <SectionTitle
            title="Trusted by Dentists Nationwide"
            description="Don't just take our word for it — hear directly from the practices that rely on us every day."
            isCenter={true}
          />
        </div>
      </div>

      {/* ── Testimonial Slider ── */}
      <TestimonialSlider />
    </section>
  );
}
