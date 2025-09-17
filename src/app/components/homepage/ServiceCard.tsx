import React from "react";
import Link from "next/link";
import { icons, ArrowRight } from "@/app/assets/icons/homepageIcons";

type IconKey = keyof typeof icons;

interface ServiceCardProps {
  icon: IconKey;
  th_name: string;
  eng_name: string;
  href: string;
  classNameCard?: string;
}

function ServiceCard({ icon, th_name, eng_name, href, classNameCard }: ServiceCardProps) {
  const IconComponent = icons[icon];

  return (
    <Link
      href={href}
      className={`flex flex-col items-start text-start shadow-sm py-6 px-8 rounded-2xl bg-neutral-100 
                  transition-colors duration-200 cursor-pointer ${classNameCard}`}
    >
      <div className="flex items-center justify-between w-full space-x-2">
        {IconComponent && <IconComponent />}
        <div className="hover:scale-125 transition-transform duration-200 cursor-pointer">
          <ArrowRight />
        </div>
      </div>

      <h4 className="mt-4 font-medium text-neutral-800 text-xl">{th_name}</h4>
      <p className="text-gray-primary text-md">{eng_name}</p>
    </Link>
  );
}

export default ServiceCard;