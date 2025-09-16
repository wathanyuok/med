import React from "react";
import ExapinkBtn from "../ui/ExapinkBtn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface PackageCardInterface {
  id: number;
  title: string;
  detail: string;
  image_url?: string;
  price: number;
  old_price: number;
  percentage_off: number;
  onDetailClick?: (id: number) => void;
  onBuyClick?: (id: number) => void;
}

function PackageCard({
  id,
  title,
  detail,
  image_url,
  price,
  old_price,
  percentage_off,
  onDetailClick,
  onBuyClick,
}: PackageCardInterface) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl shadow-sm transition h-full bg-white">
      {/* รูปภาพ */}
      <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-t-xl overflow-hidden">
        {image_url ? (
          <Image
            src={image_url}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* เนื้อหา */}
      <div className="space-y-4 px-8">
        <div>
          <h4 className="text-xl font-semibold text-neutral-800">{title}</h4>
          <p className="text-md text-neutral-600">{detail}</p>
        </div>

        {/* ราคา */}
        <div className="flex items-start justify-start gap-8">
          <div>
            <p className="text-xl font-bold text-neutral-800">
              {price.toLocaleString()} บาท
            </p>
            <p className="line-through text-neutral-600/70">
              {old_price.toLocaleString()} บาท
            </p>
          </div>
          <div>
            <span className="text-md font-semibold text-exa-pink bg-pale-lilac px-4 rounded-full">
              ลด {percentage_off}%
            </span>
          </div>
        </div>

        {/* ปุ่ม */}
        <div className="flex justify-between items-start gap-4 mb-6">
          <div className="w-1/2">
            <ExapinkBtn
              label="ซื้อแพคเกจ"
              onClick={() => onBuyClick?.(id)}
            />
          </div>

          <button
            className="flex gap-2 py-2 cursor-pointer hover:scale-105 transition duration-200 text-neutral-800 font-semibold"
            onClick={() => onDetailClick?.(id)}
          >
            ดูรายละเอียด <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;