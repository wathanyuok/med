import Image from "next/image";
import React from "react";
import Lab from "@/app/assets/images/lab.png";
import { DiscoveryCard, RiskCard } from "@/app/assets/icons/homepageIcons";

function LabSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      {/* ซ้าย (ไอคอนการ์ด) */}
      <div className="md:col-span-1 flex items-center justify-center">
        <div className="relative flex items-start">
          <div className="relative z-10 scale-100 sm:scale-110 md:scale-125 lg:scale-150">
            <DiscoveryCard />
          </div>

          {/* ระยะซ้อน / ขยับขึ้น ปรับตามขนาดหน้าจอ */}
          <div className="
              relative z-20
              -translate-y-6 sm:-translate-y-8 md:-translate-y-10
              -ml-10 sm:-ml-14 md:-ml-20 lg:-ml-24
              scale-100 sm:scale-110 md:scale-125 lg:scale-150">
            <RiskCard />
          </div>
        </div>
      </div>

      {/* ขวา (ภาพพื้นหลัง + กล่องข้อความ) */}
      <div className="md:col-span-2 relative rounded-xl overflow-hidden
                      h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px]">
        {/* รูปพื้นหลัง: cover บนจอเล็ก, ชิดขวา/contain ตั้งแต่ md ขึ้นไป */}
        <Image
          src={Lab}
          alt="lab"
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="absolute inset-0
                     object-cover md:object-contain
                     md:object-right"
          priority
        />

        {/* กล่องข้อความ */}
        <div className="relative z-10 w-fit 
                        mt-10 sm:mt-16 md:mt-24 ml-3 sm:ml-6 md:ml-8
                        rounded-xl bg-neutral-100/60 backdrop-blur
                        px-4 py-5 sm:px-8 sm:py-8 md:px-12 md:py-10
                        shadow">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
            ด้วย Lab และเครื่องวิเคราะห์ <br />
            ที่ได้รับ <span className="text-exa-pink">มาตรฐานสูงสุด*</span>
          </h3>

          <h4 className="mt-3 text-base sm:text-lg lg:text-xl">
            เทคโนโลยีจาก Illumina และอื่น ๆ เพื่อการวิเคราะห์ที่แม่นยำ
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LabSection;
