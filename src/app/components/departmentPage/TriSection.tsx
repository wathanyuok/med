import React from "react";
import Image from "next/image";

interface TriSectionProps {
  images: string[]; // 3 รูป [ซ้าย, ขวาบน, ขวาล่าง]
}

function TriSection({ images }: TriSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* ซ้าย - รูปใหญ่ */}
      <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[500px] md:col-span-2 rounded-2xl overflow-hidden">
        <Image
          src={images[0]}
          alt="Main section"
          fill
          className="object-cover"
        />
      </div>

      {/* ขวา - แบ่งเป็น 2 รูป */}
      <div className="grid grid-rows-2 gap-4">
        <div className="relative w-full aspect-[16/9] md:h-[240px] rounded-2xl overflow-hidden">
          <Image
            src={images[1]}
            alt="Top section"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-[16/9] md:h-[240px] rounded-2xl overflow-hidden">
          <Image
            src={images[2]}
            alt="Bottom section"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default TriSection;
