import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

interface SectionTitleProps {
  title: string;
  description: string;
  isCenter?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionTitle({
  title,
  description,
  isCenter = true,
  className,
  titleClassName,
  descriptionClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 lg:gap-4",
        isCenter ? "items-center px-4 md:px-10 lg:px-0" : "items-start",
        className,
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={cn(
          "text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-semibold leading-tight text-black",
          isCenter ? "text-center md:max-w-175" : "text-left",
          titleClassName,
        )}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "font-inter text-paragraph text-base lg:text-[18px] font-normal leading-normal",
          isCenter ? "text-center md:max-w-150" : "text-left",
          descriptionClassName,
        )}
      >
        {description}
      </motion.p>
    </div>
  );
}
