import { testimonialsData } from "@/constants";
import { Star } from "lucide-react";
import * as motion from "motion/react-client";

export default function TestimonialSlider() {
  const duplicated = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* ── Infinite Scroll Strip ── */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-testimonial-scroll w-max gap-5 px-4">
          {duplicated.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] xl:w-[26vw] bg-light-gray rounded-2xl p-6 md:p-8 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-inter text-paragraph text-[14px] md:text-[15px] leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[12px] shrink-0">
                  {testimonial.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-black leading-tight truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-paragraph truncate mt-0.5">
                    {testimonial.practice} · {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes testimonialScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .animate-testimonial-scroll {
          animation: testimonialScroll 40s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
