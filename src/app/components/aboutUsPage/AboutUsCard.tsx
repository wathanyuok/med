import Image from "next/image";
import React from "react";

export interface AboutUsCardInterface {
  name: string;
  position: string;
  imageUrl: string;
  detail: string[];
}

function AboutUsCard({ name, position, detail, imageUrl }: AboutUsCardInterface) {
  return (
    <div className="flex flex-col rounded-2xl shadow bg-white overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full aspect-square bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-neutral-500 text-sm sm:text-base">
            ภาพ {name}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="py-6 px-4 sm:px-6 md:px-8">
        <div className="mb-4 sm:mb-6">
          <h4 className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold text-center sm:text-left">
            {name}
          </h4>
          <h5 className="text-base sm:text-lg md:text-xl text-neutral-700 text-center sm:text-left">
            {position}
          </h5>
        </div>
        <ul className="list-disc list-inside text-neutral-700 space-y-1 text-sm sm:text-base md:text-lg">
          {detail.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutUsCard;
