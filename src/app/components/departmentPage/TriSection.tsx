import React from "react";
import Image, { StaticImageData } from "next/image";

interface TriSectionProps {
  images: (string | StaticImageData)[];
  reverse?: boolean;
}

function TriSection({ images, reverse = false }: TriSectionProps) {
  return (
    <div className="grid grid-cols-3 gap-0 h-[250px] sm:h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
      {/* รูปใหญ่ */}
      <div
        className={`relative col-span-2 h-full 
          ${reverse ? "order-2" : "order-1"}`}
      >
        <Image
          src={images[0]}
          alt="Main section"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ฝั่งเล็ก (2 รูป) */}
      <div className={`grid grid-rows-2 h-full ${reverse ? "order-1" : "order-2"}`}>
        {/* บน */}
        <div className="relative w-full h-full">
          <Image
            src={images[1]}
            alt="Top section"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* ล่าง */}
        <div className="relative w-full h-full">
          <Image
            src={images[2]}
            alt="Bottom section"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

    </div>
  );
}

export default TriSection;