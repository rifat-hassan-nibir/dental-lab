"use client";

import Image from "next/image";
import { heroImages } from "@/constants";

export default function ImageSlider() {
  // Triple the images to ensure seamless looping
  const duplicatedImages = [...heroImages, ...heroImages, ...heroImages];

  return (
    <div className="w-full overflow-hidden pt-10 md:pt-14 lg:pt-16 xl:pt-20 pb-10 md:pb-14 lg:pb-16 xl:pb-25">
      <div className="flex animate-infinite-scroll w-max gap-4 px-4">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="relative flex-none w-[calc(100vw/2)] sm:w-[calc(100vw/3)] md:w-[calc(100vw/5)] lg:w-[calc(100vw/6-1rem)] xl:w-[calc(100vw/7-1rem)] aspect-2/3 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Dental Lab Work ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
