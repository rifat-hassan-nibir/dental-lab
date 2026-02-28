import { MoveRight } from "lucide-react";
import Button from "../common/ui/Button";
import ImageSlider from "./ImageSlider";

export default function Hero() {
  return (
    <section className="bg-light-gray">
      <div className="body-container px-4 flex flex-col items-center gap-4 lg:gap-5 pt-10 lg:pt-16 xl:pt-20">
        <h1 className="text-4xl md:text-[48px] lg:text-[52px] xl:text-[56px] font-semibold text-center leading-tight md:w-175 mx-auto">
          The Fastest Growing Dental Laboratory
        </h1>
        <p className="font-inter text-paragraph text-base lg:text-lg xl:text-[18px] font-normal text-center leading-normal md:w-150 mx-auto">
          We are a full-service dental laboratory committed to delivering high-quality,
          state-of-the-art dental restorations with exceptional value.
        </p>
        <div className="mt-2 lg:mt-4">
          <Button className="px-10">
            <div className="flex items-center gap-2">
              Connect With Us
              <MoveRight />
            </div>
          </Button>
        </div>
      </div>
      <ImageSlider />
    </section>
  );
}
