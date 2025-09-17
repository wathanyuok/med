import React from "react";
import Image, { StaticImageData } from "next/image";

interface ClearCardSectionProps {
  imageHeroUrl: string | StaticImageData;
  cardItems: {
    id: number;
    title: string;
    detail: string;
  }[];
  reverse?: boolean;
}

function ClearCardSection({ imageHeroUrl, cardItems, reverse = false }: ClearCardSectionProps) {
  return (
      <div className="relative w-full">
          {/* พื้นหลัง */}
          <div className="relative w-full min-h-[600px] md:py-[350px]">
              <Image
                  src={imageHeroUrl}
                  alt="image"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
              />
          </div>

          {/* Overlay Card */}
          <div
              className={`absolute inset-0 flex items-center container mx-auto px-4
          ${reverse ? "justify-start" : "justify-end"}`}
          >
              <div className="flex flex-col gap-6  max-w-2xl w-full">
                  {cardItems.map((item) => (
                      <div
                          key={item.id}
                          className="p-6 rounded-2xl bg-white/60 shadow-lg backdrop-blur-sm"
                      >
                          <h3 className="text-lg md:text-xl font-semibold text-neutral-800">
                              {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-neutral-700 mt-2">
                              {item.detail}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default ClearCardSection;