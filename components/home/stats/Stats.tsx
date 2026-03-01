import Badge from "@/components/common/ui/Badge";
import SectionTitle from "@/components/common/ui/SectionTitle";
import { StarIcon } from "lucide-react";

const statsData = [
  {
    title: "1,700+",
    description:
      "Dentists trust us for exceptional quality, reliable service, and lasting partnerships",
  },
  {
    title: "900,000+",
    description:
      "Restorations delivered with precision and care—trusted by leading dentists nationwide",
  },
  {
    title: "62%",
    description:
      "Cases Submitted Digitally — Trusted by Tech-Forward Practices Using iTero, TRIOS, Medit, and More",
  },
];

export default function Stats() {
  return (
    <section className="bg-light-gray px-4 py-10 lg:py-16 xl:py-24">
      <div className="body-container">
        <div className="flex justify-center">
          <Badge icon={<StarIcon className="w-4 h-4" />} title="Our Stats" className="bg-white" />
        </div>
        <SectionTitle
          title="Why Top Dentists Trust Us?"
          description="Not just restorations — precision-engineered results, seamless support, and partnerships that elevate your practice"
          isCenter={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 xl:mt-16">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg shadow-gray-200 hover:bg-white/50 transition-all duration-300"
            >
              <h4 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-normal text-black">
                {stat.title}
              </h4>
              <p className="text-paragraph text-[14px] md:text-[16px] leading-relaxed mb-3 md:mb-4 mt-4 lg:mt-6">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
