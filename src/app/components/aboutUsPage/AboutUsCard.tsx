import Image from "next/image";
import React from "react";

export interface AboutUsCardInterface {
  name: string;
  position: string;
  detail: string[];
  image?: string;
}

function AboutUsCard({ name, position, detail, image }: AboutUsCardInterface) {
  return (
    <div className="flex flex-col rounded-2xl shadow bg-white">
      <div className="bg-icy-blue p-48 rounded-t-2xl flex items-center justify-center">
        {image ? (
          <Image height={100} width={100} src={image} alt={name} className="h-40 w-40 object-cover rounded-xl" />
        ) : (
          <span className="text-neutral-500">รูปภาพ</span>
        )}
      </div>
      <div className="py-6 px-8">
        <div className="mb-6">
          <h4 className="text-xl text-neutral-800 font-semibold">{name}</h4>
          <h5 className="text-lg text-neutral-700">{position}</h5>
        </div>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          {detail.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutUsCard;
