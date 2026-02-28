import { Network } from "lucide-react";
import SectionTitle from "../../common/ui/SectionTitle";
import Badge from "@/components/common/ui/Badge";
import { featuresData } from "@/constants";

export default function OurFeatures() {
  return (
    <section className="body-container px-4 py-10 lg:py-16 xl:py-24">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 items-start relative">
        <div className="lg:w-[35%] flex flex-col items-start lg:sticky lg:top-32 h-fit pr-4 md:pr-10 lg:pr-2">
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

        <div className="lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 w-full">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="hover:bg-light-gray/50 transition-colors cursor-pointer bg-light-gray rounded-xl p-6 md:p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <h4 className="text-[20px] md:text-[24px] font-semibold leading-normal text-black">
                    {index + 1}. {feature.title}
                  </h4>
                </div>

                <p className="text-paragraph text-[14px] md:text-[16px] leading-relaxed mb-3 md:mb-6">
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
