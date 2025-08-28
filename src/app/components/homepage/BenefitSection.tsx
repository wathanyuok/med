import Image from "next/image";
import React from "react";
import skeleton from "@/app/assets/images/skeleton.png";
import { icons } from "@/app/assets/icons/homepageIcons";

type IconKey = keyof typeof icons;

type Service = {
  icon: IconKey;
  name: string;
  detail: string;
};

function BenefitSection() {
  const services: Service[] = [
    {
      icon: "CompleteCareApproach",
      name: "Complete Care Approach",
      detail: "ครบทั้งการวินิจฉัย รักษา ป้องกัน และฟื้นฟู ทุกมิติสุขภาพ",
    },
    {
      icon: "PreSymptomaticDetection",
      name: "Pre-symptomatic Detection",
      detail: "ตรวจเจอก่อนแสดงอาการ เพิ่มโอกาสป้องกันโรค",
    },
    {
      icon: "PersonalizedHealthPlans",
      name: "Personalized Health Plans",
      detail: "แผนการดูแลที่ออกแบบมาเพื่อคุณโดยเฉพาะ",
    },
    {
      icon: "NecessaryTreatmentOnly",
      name: "Necessary Treatment Only",
      detail: "รักษาเท่าที่จำเป็นตามผลแล็บ ไม่จ่ายเกินจำเป็น",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* left content: benefits */}
        <div className="relative">
          {/* skeleton background จอเล็ก */}
          <div className="absolute inset-0 -z-10 md:hidden">
            <Image
              src={skeleton}
              alt="skeleton background"
              fill
              className="object-cover object-top opacity-40"
              priority
            />
          </div>

          <div className="relative space-y-4 py-8">
            {services.map((service, idx) => (
              <IconWithTitleDetail
                key={idx}
                icon={service.icon}
                name={service.name}
                detail={service.detail}
              />
            ))}
          </div>
        </div>

        {/* right content */}
        <div className="relative w-full h-[625px] rounded-2xl overflow-hidden hidden md:block">
          <Image
            src={skeleton}
            alt="skeleton"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
      </div>
    </div>
  );
}

type IconWithTitleDetailProps = {
  icon: IconKey;
  name: string;
  detail: string;
};

const IconWithTitleDetail = ({ icon, name, detail }: IconWithTitleDetailProps) => {
  const IconComponent = icons[icon];
  return (
    <div
      className="flex items-start sm:items-center gap-4 rounded-2xl
                 bg-gradient-to-r from-white/30 via-white/20 to-white/10 backdrop-blur-md
                 px-4 py-6 shadow transition hover:shadow-lg"
    >
      <div className="flex-shrink-0">
        <IconComponent />
      </div>
      <div>
        <h4 className="text-xl sm:text-2xl font-semibold text-neutral-800">
          {name}
        </h4>
        <p className="mt-1 text-sm sm:text-lg text-neutral-800">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default BenefitSection;
