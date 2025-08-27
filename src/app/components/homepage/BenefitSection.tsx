import { CompleteCareApproach } from "@/app/assets/icons/serviceIcons";
import Image from "next/image";
import React from "react";
import doctor1 from "@/app/assets/images/doctor1.png";

function BenefitSection() {
  return (
    <div className="py-6 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: benefits */}
        <div className="space-y-4">
          <IconWithTitleDetail />
          <IconWithTitleDetail />
          <IconWithTitleDetail />
          <IconWithTitleDetail />
        </div>

        {/* Right side: image */}
        <div className="w-full h-64 md:h-auto">
          <Image
            src={doctor1}
            alt="Doctor"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

const IconWithTitleDetail = () => (
  <div
    className="flex flex-col sm:flex-row items-start sm:items-center gap-4
               rounded-2xl
               bg-gradient-to-r from-white/30 via-white/20 to-white/10
               backdrop-blur-md
               px-4 py-6 shadow
               transition hover:shadow-lg"
  >
    <div className="flex-shrink-0">
      <CompleteCareApproach />
    </div>
    <div>
      <h4 className="text-xl sm:text-2xl font-semibold text-neutral-800">
        Complete Care Approach
      </h4>
      <p className="mt-1 text-sm sm:text-lg text-neutral-800">
        ครบทั้งการวินิจฉัย รักษา ป้องกัน และฟื้นฟู ทุกมิติสุขภาพ
      </p>
    </div>
  </div>
);

export default BenefitSection;
