"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ABlogCardProps {
  id: number;
  image: string | StaticImageData;
  title: string;
  onDetail?: () => void;
}

function BlogCard({ image, title, onDetail }: ABlogCardProps) {
  return (
    <div
      onClick={onDetail}
      className="relative aspect-square w-full rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer group"
    >
      {/* รูปภาพเต็มกล่อง */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay ข้อความ */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">


        {/* <div className="flex items-center justify-between gap-2 mt-2 text-bright-blue">
          <p className="font-semibold text-sm md:text-base">
            ดูรายละเอียดเพิ่มเติม
          </p>
          <ArrowRight />
        </div> */}
      </div>
    </div>
  );
}

export default BlogCard;
