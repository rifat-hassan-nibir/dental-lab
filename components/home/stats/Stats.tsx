import Badge from "@/components/common/ui/Badge";
import SectionTitle from "@/components/common/ui/SectionTitle";
import { statsData } from "@/constants";
import { StarIcon } from "lucide-react";
import * as motion from "motion/react-client";

export default function Stats() {
  return (
    <section className="bg-light-gray px-4 py-10 lg:py-16 xl:py-24">
      <div className="body-container">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Badge icon={<StarIcon className="w-4 h-4" />} title="Our Stats" className="bg-white" />
        </motion.div>

        {/* Section Title */}
        <div className="mb-4">
          <SectionTitle
            title="Why Top Dentists Trust Us?"
            description="Not just restorations — precision-engineered results, seamless support, and partnerships that elevate your practice"
            isCenter={true}
          />
        </div>

        {/* Stats */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 xl:mt-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index === 0 ? 0.6 : index === 1 ? 0.8 : 1 }}
              className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg shadow-gray-200 hover:bg-white/50 transition-all duration-300"
            >
              <h4 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-normal text-black">
                {stat.title}
              </h4>
              <p className="text-paragraph text-[14px] md:text-[16px] leading-relaxed mb-3 md:mb-4 mt-4 lg:mt-6">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
