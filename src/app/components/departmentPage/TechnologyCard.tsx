import React from "react";
import Image, {StaticImageData} from "next/image";
import { ArrowRight } from "lucide-react";

interface TechnologyCardProps {
  title: string;
  subtitle: string;
  imageUrl: string | StaticImageData;
  onClick?: () => void;
}

function TechnologyCard({ title, subtitle, imageUrl, onClick }: TechnologyCardProps) {
  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
      {/* Background */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold">
          {title}
        </h3>
        <p className="text-white/80 text-sm md:text-base mt-2">
          {subtitle}
        </p>

        <button
          onClick={onClick}
          className="mt-6 flex items-center gap-2 bg-white text-bright-blue font-semibold px-5 py-2 rounded-full shadow hover:bg-indigo-50 transition duration-200 hover:scale-105 cursor-pointer"
        >
          ดูเพิ่มเติม
          <ArrowRight size={18} />
        </button>
      </div>
      
    </div>
  );
}

export default TechnologyCard;
