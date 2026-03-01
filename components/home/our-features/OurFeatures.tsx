import Badge from "@/components/common/ui/Badge";
import { featuresData } from "@/constants";
import { Network } from "lucide-react";
import SectionTitle from "../../common/ui/SectionTitle";

export default function OurFeatures() {
  return (
    <section className="body-container px-4 py-10 lg:py-16 xl:py-24">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 items-start relative">
        <div className="lg:w-[40%] flex flex-col items-start lg:sticky lg:top-32 h-fit">
          <Badge
            icon={<Network className="w-4 h-4 text-paragraph" />}
            title="Unmatched Precision"
          />

          <SectionTitle
            title="Our Features"
            description="Cosmetic excellence, high-precision restorations, and All-on-X expertise, everything crafted with care and technical mastery."
            isCenter={false}
          />
        </div>

        <div className="lg:w-[60%] grid grid-cols-1 gap-3 md:gap-4 w-full bg-light-gray rounded-xl p-5 md:p-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="relative hover:shadow-lg hover:shadow-gray-200 transition-all duration-300 bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5 lg:gap-6 group border border-transparent hover:border-primary/10"
            >
              <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {feature.icon && <feature.icon className="w-4 h-4 md:w-6 md:h-6" />}
              </div>
              <div>
                <h4 className="text-[18px] md:text-[22px] font-bold text-black mb-2 transition-colors">
                  {feature.title}
                </h4>
                <p className="font-inter text-paragraph text-[14px] md:text-[16px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
